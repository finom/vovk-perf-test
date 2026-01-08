import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khn")
export default class KhnController {
  @operation({
    summary: "Get Khn",
  })
  @get()
  static getKhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khn",
  })
  @post("{id}")
  static createKhn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
