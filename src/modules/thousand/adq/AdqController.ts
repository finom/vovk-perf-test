import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adq")
export default class AdqController {
  @operation({
    summary: "Get Adq",
  })
  @get()
  static getAdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adq",
  })
  @post("{id}")
  static createAdq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
