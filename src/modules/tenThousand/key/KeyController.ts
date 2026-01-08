import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("key")
export default class KeyController {
  @operation({
    summary: "Get Key",
  })
  @get()
  static getKey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Key",
  })
  @post("{id}")
  static createKey = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
