import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxr")
export default class MxrController {
  @operation({
    summary: "Get Mxr",
  })
  @get()
  static getMxr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mxr",
  })
  @post("{id}")
  static createMxr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
