import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxg")
export default class MxgController {
  @operation({
    summary: "Get Mxg",
  })
  @get()
  static getMxg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mxg",
  })
  @post("{id}")
  static createMxg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
