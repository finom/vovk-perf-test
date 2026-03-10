import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byk")
export default class BykController {
  @operation({
    summary: "Get Byk",
  })
  @get()
  static getByk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Byk",
  })
  @post("{id}")
  static createByk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
