import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bw")
export default class BwController {
  @operation({
    summary: "Get Bw",
  })
  @get()
  static getBw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bw",
  })
  @post("{id}")
  static createBw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
