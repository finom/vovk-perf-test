import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekx")
export default class EkxController {
  @operation({
    summary: "Get Ekx",
  })
  @get()
  static getEkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekx",
  })
  @post("{id}")
  static createEkx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
