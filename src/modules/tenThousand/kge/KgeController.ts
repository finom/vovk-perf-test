import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kge")
export default class KgeController {
  @operation({
    summary: "Get Kge",
  })
  @get()
  static getKge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kge",
  })
  @post("{id}")
  static createKge = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
