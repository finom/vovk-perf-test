import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpy")
export default class LpyController {
  @operation({
    summary: "Get Lpy",
  })
  @get()
  static getLpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpy",
  })
  @post("{id}")
  static createLpy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
