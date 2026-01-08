import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekw")
export default class EkwController {
  @operation({
    summary: "Get Ekw",
  })
  @get()
  static getEkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekw",
  })
  @post("{id}")
  static createEkw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
