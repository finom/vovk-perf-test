import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxu")
export default class MxuController {
  @operation({
    summary: "Get Mxu",
  })
  @get()
  static getMxu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mxu",
  })
  @post("{id}")
  static createMxu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
