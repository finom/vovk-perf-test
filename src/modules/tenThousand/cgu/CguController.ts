import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgu")
export default class CguController {
  @operation({
    summary: "Get Cgu",
  })
  @get()
  static getCgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgu",
  })
  @post("{id}")
  static createCgu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
