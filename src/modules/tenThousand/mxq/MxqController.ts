import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxq")
export default class MxqController {
  @operation({
    summary: "Get Mxq",
  })
  @get()
  static getMxq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mxq",
  })
  @post("{id}")
  static createMxq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
