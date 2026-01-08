import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aab")
export default class AabController {
  @operation({
    summary: "Get Aab",
  })
  @get()
  static getAab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aab",
  })
  @post("{id}")
  static createAab = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
