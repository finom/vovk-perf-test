import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etb")
export default class EtbController {
  @operation({
    summary: "Get Etb",
  })
  @get()
  static getEtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etb",
  })
  @post("{id}")
  static createEtb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
