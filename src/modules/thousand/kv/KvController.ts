import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kv")
export default class KvController {
  @operation({
    summary: "Get Kv",
  })
  @get()
  static getKv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kv",
  })
  @post("{id}")
  static createKv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
