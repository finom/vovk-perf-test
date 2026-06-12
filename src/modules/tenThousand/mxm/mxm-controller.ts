import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxm")
export default class MxmController {
  @operation({
    summary: "Get Mxm",
  })
  @get()
  static getMxm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mxm",
  })
  @post("{id}")
  static createMxm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
