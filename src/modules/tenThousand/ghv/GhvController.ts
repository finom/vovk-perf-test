import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghv")
export default class GhvController {
  @operation({
    summary: "Get Ghv",
  })
  @get()
  static getGhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghv",
  })
  @post("{id}")
  static createGhv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
