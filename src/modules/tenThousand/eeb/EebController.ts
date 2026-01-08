import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eeb")
export default class EebController {
  @operation({
    summary: "Get Eeb",
  })
  @get()
  static getEeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eeb",
  })
  @post("{id}")
  static createEeb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
