import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("noq")
export default class NoqController {
  @operation({
    summary: "Get Noq",
  })
  @get()
  static getNoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noq",
  })
  @post("{id}")
  static createNoq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
