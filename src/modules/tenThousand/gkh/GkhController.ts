import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkh")
export default class GkhController {
  @operation({
    summary: "Get Gkh",
  })
  @get()
  static getGkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkh",
  })
  @post("{id}")
  static createGkh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
