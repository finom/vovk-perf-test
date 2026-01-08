import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctt")
export default class CttController {
  @operation({
    summary: "Get Ctt",
  })
  @get()
  static getCtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctt",
  })
  @post("{id}")
  static createCtt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
