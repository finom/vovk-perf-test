import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glo")
export default class GloController {
  @operation({
    summary: "Get Glo",
  })
  @get()
  static getGlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glo",
  })
  @post("{id}")
  static createGlo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
