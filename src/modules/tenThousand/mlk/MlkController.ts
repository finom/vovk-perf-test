import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlk")
export default class MlkController {
  @operation({
    summary: "Get Mlk",
  })
  @get()
  static getMlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlk",
  })
  @post("{id}")
  static createMlk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
