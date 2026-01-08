import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kka")
export default class KkaController {
  @operation({
    summary: "Get Kka",
  })
  @get()
  static getKka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kka",
  })
  @post("{id}")
  static createKka = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
