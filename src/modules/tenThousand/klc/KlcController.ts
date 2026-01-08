import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klc")
export default class KlcController {
  @operation({
    summary: "Get Klc",
  })
  @get()
  static getKlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klc",
  })
  @post("{id}")
  static createKlc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
