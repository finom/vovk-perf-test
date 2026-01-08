import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kif")
export default class KifController {
  @operation({
    summary: "Get Kif",
  })
  @get()
  static getKif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kif",
  })
  @post("{id}")
  static createKif = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
