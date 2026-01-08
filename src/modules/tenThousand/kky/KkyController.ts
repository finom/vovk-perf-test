import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kky")
export default class KkyController {
  @operation({
    summary: "Get Kky",
  })
  @get()
  static getKky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kky",
  })
  @post("{id}")
  static createKky = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
