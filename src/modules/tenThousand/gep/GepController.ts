import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gep")
export default class GepController {
  @operation({
    summary: "Get Gep",
  })
  @get()
  static getGep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gep",
  })
  @post("{id}")
  static createGep = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
