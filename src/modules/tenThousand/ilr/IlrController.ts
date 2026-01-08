import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilr")
export default class IlrController {
  @operation({
    summary: "Get Ilr",
  })
  @get()
  static getIlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilr",
  })
  @post("{id}")
  static createIlr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
