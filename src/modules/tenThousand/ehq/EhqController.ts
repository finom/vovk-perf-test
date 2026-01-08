import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehq")
export default class EhqController {
  @operation({
    summary: "Get Ehq",
  })
  @get()
  static getEhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehq",
  })
  @post("{id}")
  static createEhq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
