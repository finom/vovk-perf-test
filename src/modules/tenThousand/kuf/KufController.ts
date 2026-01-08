import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kuf")
export default class KufController {
  @operation({
    summary: "Get Kuf",
  })
  @get()
  static getKuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuf",
  })
  @post("{id}")
  static createKuf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
