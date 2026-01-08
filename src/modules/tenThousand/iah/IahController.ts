import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iah")
export default class IahController {
  @operation({
    summary: "Get Iah",
  })
  @get()
  static getIah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iah",
  })
  @post("{id}")
  static createIah = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
