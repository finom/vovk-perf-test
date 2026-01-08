import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dam")
export default class DamController {
  @operation({
    summary: "Get Dam",
  })
  @get()
  static getDam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dam",
  })
  @post("{id}")
  static createDam = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
