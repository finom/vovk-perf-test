import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("buj")
export default class BujController {
  @operation({
    summary: "Get Buj",
  })
  @get()
  static getBuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buj",
  })
  @post("{id}")
  static createBuj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
