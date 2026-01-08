import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clt")
export default class CltController {
  @operation({
    summary: "Get Clt",
  })
  @get()
  static getClt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clt",
  })
  @post("{id}")
  static createClt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
