import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsa")
export default class GsaController {
  @operation({
    summary: "Get Gsa",
  })
  @get()
  static getGsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsa",
  })
  @post("{id}")
  static createGsa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
