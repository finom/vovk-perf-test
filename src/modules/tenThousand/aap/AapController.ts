import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aap")
export default class AapController {
  @operation({
    summary: "Get Aap",
  })
  @get()
  static getAap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aap",
  })
  @post("{id}")
  static createAap = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
