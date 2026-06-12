import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpp")
export default class MppController {
  @operation({
    summary: "Get Mpp",
  })
  @get()
  static getMpp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mpp",
  })
  @post("{id}")
  static createMpp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
