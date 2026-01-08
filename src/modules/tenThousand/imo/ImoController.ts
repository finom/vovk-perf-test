import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imo")
export default class ImoController {
  @operation({
    summary: "Get Imo",
  })
  @get()
  static getImo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imo",
  })
  @post("{id}")
  static createImo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
