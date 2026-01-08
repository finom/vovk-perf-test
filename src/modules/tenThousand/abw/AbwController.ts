import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abw")
export default class AbwController {
  @operation({
    summary: "Get Abw",
  })
  @get()
  static getAbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abw",
  })
  @post("{id}")
  static createAbw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
