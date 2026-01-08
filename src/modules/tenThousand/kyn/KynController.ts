import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyn")
export default class KynController {
  @operation({
    summary: "Get Kyn",
  })
  @get()
  static getKyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyn",
  })
  @post("{id}")
  static createKyn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
