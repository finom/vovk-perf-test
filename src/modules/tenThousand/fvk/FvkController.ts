import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvk")
export default class FvkController {
  @operation({
    summary: "Get Fvk",
  })
  @get()
  static getFvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvk",
  })
  @post("{id}")
  static createFvk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
