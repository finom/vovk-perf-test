import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("keu")
export default class KeuController {
  @operation({
    summary: "Get Keu",
  })
  @get()
  static getKeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Keu",
  })
  @post("{id}")
  static createKeu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
