import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekr")
export default class EkrController {
  @operation({
    summary: "Get Ekr",
  })
  @get()
  static getEkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekr",
  })
  @post("{id}")
  static createEkr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
