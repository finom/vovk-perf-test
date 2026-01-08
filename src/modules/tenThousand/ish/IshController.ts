import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ish")
export default class IshController {
  @operation({
    summary: "Get Ish",
  })
  @get()
  static getIsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ish",
  })
  @post("{id}")
  static createIsh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
