import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kis")
export default class KisController {
  @operation({
    summary: "Get Kis",
  })
  @get()
  static getKis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kis",
  })
  @post("{id}")
  static createKis = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
