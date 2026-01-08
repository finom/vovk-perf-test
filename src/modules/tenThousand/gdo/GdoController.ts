import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdo")
export default class GdoController {
  @operation({
    summary: "Get Gdo",
  })
  @get()
  static getGdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdo",
  })
  @post("{id}")
  static createGdo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
