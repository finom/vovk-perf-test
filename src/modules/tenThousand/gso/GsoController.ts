import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gso")
export default class GsoController {
  @operation({
    summary: "Get Gso",
  })
  @get()
  static getGso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gso",
  })
  @post("{id}")
  static createGso = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
