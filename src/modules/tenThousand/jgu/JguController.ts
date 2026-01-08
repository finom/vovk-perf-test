import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgu")
export default class JguController {
  @operation({
    summary: "Get Jgu",
  })
  @get()
  static getJgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgu",
  })
  @post("{id}")
  static createJgu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
