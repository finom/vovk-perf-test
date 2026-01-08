import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyg")
export default class CygController {
  @operation({
    summary: "Get Cyg",
  })
  @get()
  static getCyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyg",
  })
  @post("{id}")
  static createCyg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
