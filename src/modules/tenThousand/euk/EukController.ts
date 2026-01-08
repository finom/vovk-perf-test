import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("euk")
export default class EukController {
  @operation({
    summary: "Get Euk",
  })
  @get()
  static getEuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euk",
  })
  @post("{id}")
  static createEuk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
