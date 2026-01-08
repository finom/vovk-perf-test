import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kuo")
export default class KuoController {
  @operation({
    summary: "Get Kuo",
  })
  @get()
  static getKuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuo",
  })
  @post("{id}")
  static createKuo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
