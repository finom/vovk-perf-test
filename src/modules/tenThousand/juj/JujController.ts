import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("juj")
export default class JujController {
  @operation({
    summary: "Get Juj",
  })
  @get()
  static getJuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Juj",
  })
  @post("{id}")
  static createJuj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
