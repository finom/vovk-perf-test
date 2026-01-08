import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gq")
export default class GqController {
  @operation({
    summary: "Get Gq",
  })
  @get()
  static getGq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gq",
  })
  @post("{id}")
  static createGq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
