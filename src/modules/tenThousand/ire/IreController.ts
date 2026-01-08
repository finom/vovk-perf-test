import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ire")
export default class IreController {
  @operation({
    summary: "Get Ire",
  })
  @get()
  static getIre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ire",
  })
  @post("{id}")
  static createIre = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
