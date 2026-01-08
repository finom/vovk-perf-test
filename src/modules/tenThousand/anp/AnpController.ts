import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("anp")
export default class AnpController {
  @operation({
    summary: "Get Anp",
  })
  @get()
  static getAnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anp",
  })
  @post("{id}")
  static createAnp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
