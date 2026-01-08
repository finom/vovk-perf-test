import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("anv")
export default class AnvController {
  @operation({
    summary: "Get Anv",
  })
  @get()
  static getAnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anv",
  })
  @post("{id}")
  static createAnv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
