import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("coc")
export default class CocController {
  @operation({
    summary: "Get Coc",
  })
  @get()
  static getCoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coc",
  })
  @post("{id}")
  static createCoc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
