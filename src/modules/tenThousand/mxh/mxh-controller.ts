import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxh")
export default class MxhController {
  @operation({
    summary: "Get Mxh",
  })
  @get()
  static getMxh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mxh",
  })
  @post("{id}")
  static createMxh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
