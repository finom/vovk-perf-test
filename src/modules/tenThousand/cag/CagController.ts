import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cag")
export default class CagController {
  @operation({
    summary: "Get Cag",
  })
  @get()
  static getCag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cag",
  })
  @post("{id}")
  static createCag = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
