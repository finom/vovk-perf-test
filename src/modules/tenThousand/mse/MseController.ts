import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mse")
export default class MseController {
  @operation({
    summary: "Get Mse",
  })
  @get()
  static getMse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mse",
  })
  @post("{id}")
  static createMse = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
