import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkq")
export default class GkqController {
  @operation({
    summary: "Get Gkq",
  })
  @get()
  static getGkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkq",
  })
  @post("{id}")
  static createGkq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
