import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlf")
export default class MlfController {
  @operation({
    summary: "Get Mlf",
  })
  @get()
  static getMlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlf",
  })
  @post("{id}")
  static createMlf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
