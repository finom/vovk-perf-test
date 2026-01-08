import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfa")
export default class GfaController {
  @operation({
    summary: "Get Gfa",
  })
  @get()
  static getGfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfa",
  })
  @post("{id}")
  static createGfa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
