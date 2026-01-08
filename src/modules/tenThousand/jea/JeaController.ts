import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jea")
export default class JeaController {
  @operation({
    summary: "Get Jea",
  })
  @get()
  static getJea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jea",
  })
  @post("{id}")
  static createJea = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
