import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijk")
export default class IjkController {
  @operation({
    summary: "Get Ijk",
  })
  @get()
  static getIjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijk",
  })
  @post("{id}")
  static createIjk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
