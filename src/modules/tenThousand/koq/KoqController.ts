import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("koq")
export default class KoqController {
  @operation({
    summary: "Get Koq",
  })
  @get()
  static getKoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koq",
  })
  @post("{id}")
  static createKoq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
