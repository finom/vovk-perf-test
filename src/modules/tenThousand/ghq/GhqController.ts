import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghq")
export default class GhqController {
  @operation({
    summary: "Get Ghq",
  })
  @get()
  static getGhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghq",
  })
  @post("{id}")
  static createGhq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
