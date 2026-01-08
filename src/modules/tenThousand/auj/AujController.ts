import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("auj")
export default class AujController {
  @operation({
    summary: "Get Auj",
  })
  @get()
  static getAuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auj",
  })
  @post("{id}")
  static createAuj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
