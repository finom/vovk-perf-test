import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ics")
export default class IcsController {
  @operation({
    summary: "Get Ics",
  })
  @get()
  static getIcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ics",
  })
  @post("{id}")
  static createIcs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
