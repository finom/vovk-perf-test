import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxw")
export default class MxwController {
  @operation({
    summary: "Get Mxw",
  })
  @get()
  static getMxw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mxw",
  })
  @post("{id}")
  static createMxw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
