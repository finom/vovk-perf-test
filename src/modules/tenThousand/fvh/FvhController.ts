import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvh")
export default class FvhController {
  @operation({
    summary: "Get Fvh",
  })
  @get()
  static getFvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvh",
  })
  @post("{id}")
  static createFvh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
