import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlx")
export default class MlxController {
  @operation({
    summary: "Get Mlx",
  })
  @get()
  static getMlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlx",
  })
  @post("{id}")
  static createMlx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
