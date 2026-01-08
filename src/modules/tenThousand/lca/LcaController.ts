import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lca")
export default class LcaController {
  @operation({
    summary: "Get Lca",
  })
  @get()
  static getLca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lca",
  })
  @post("{id}")
  static createLca = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
