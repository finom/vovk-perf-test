import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("o")
export default class OController {
  @operation({
    summary: "Get O",
  })
  @get()
  static getO = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create O",
  })
  @post("{id}")
  static createO = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
