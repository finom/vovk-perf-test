import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klr")
export default class KlrController {
  @operation({
    summary: "Get Klr",
  })
  @get()
  static getKlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klr",
  })
  @post("{id}")
  static createKlr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
