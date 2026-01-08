import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlp")
export default class MlpController {
  @operation({
    summary: "Get Mlp",
  })
  @get()
  static getMlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlp",
  })
  @post("{id}")
  static createMlp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
