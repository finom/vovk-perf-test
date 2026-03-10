import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bww")
export default class BwwController {
  @operation({
    summary: "Get Bww",
  })
  @get()
  static getBww = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bww",
  })
  @post("{id}")
  static createBww = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
