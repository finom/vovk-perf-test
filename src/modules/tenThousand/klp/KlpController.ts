import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klp")
export default class KlpController {
  @operation({
    summary: "Get Klp",
  })
  @get()
  static getKlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klp",
  })
  @post("{id}")
  static createKlp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
