import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ita")
export default class ItaController {
  @operation({
    summary: "Get Ita",
  })
  @get()
  static getIta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ita",
  })
  @post("{id}")
  static createIta = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
