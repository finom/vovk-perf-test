import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyj")
export default class CyjController {
  @operation({
    summary: "Get Cyj",
  })
  @get()
  static getCyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyj",
  })
  @post("{id}")
  static createCyj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
