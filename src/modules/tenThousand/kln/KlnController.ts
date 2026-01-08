import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kln")
export default class KlnController {
  @operation({
    summary: "Get Kln",
  })
  @get()
  static getKln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kln",
  })
  @post("{id}")
  static createKln = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
