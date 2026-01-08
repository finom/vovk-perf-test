import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdd")
export default class BddController {
  @operation({
    summary: "Get Bdd",
  })
  @get()
  static getBdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdd",
  })
  @post("{id}")
  static createBdd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
