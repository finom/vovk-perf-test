import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knc")
export default class KncController {
  @operation({
    summary: "Get Knc",
  })
  @get()
  static getKnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knc",
  })
  @post("{id}")
  static createKnc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
