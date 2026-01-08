import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klg")
export default class KlgController {
  @operation({
    summary: "Get Klg",
  })
  @get()
  static getKlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klg",
  })
  @post("{id}")
  static createKlg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
