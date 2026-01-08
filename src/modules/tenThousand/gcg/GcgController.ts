import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcg")
export default class GcgController {
  @operation({
    summary: "Get Gcg",
  })
  @get()
  static getGcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcg",
  })
  @post("{id}")
  static createGcg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
