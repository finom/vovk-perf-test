import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kas")
export default class KasController {
  @operation({
    summary: "Get Kas",
  })
  @get()
  static getKas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kas",
  })
  @post("{id}")
  static createKas = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
