import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("el")
export default class ElController {
  @operation({
    summary: "Get El",
  })
  @get()
  static getEl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create El",
  })
  @post("{id}")
  static createEl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
