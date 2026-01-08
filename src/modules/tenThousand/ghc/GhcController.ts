import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghc")
export default class GhcController {
  @operation({
    summary: "Get Ghc",
  })
  @get()
  static getGhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghc",
  })
  @post("{id}")
  static createGhc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
