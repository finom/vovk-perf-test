import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eol")
export default class EolController {
  @operation({
    summary: "Get Eol",
  })
  @get()
  static getEol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eol",
  })
  @post("{id}")
  static createEol = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
