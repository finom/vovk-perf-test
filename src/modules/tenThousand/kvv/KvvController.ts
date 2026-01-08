import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvv")
export default class KvvController {
  @operation({
    summary: "Get Kvv",
  })
  @get()
  static getKvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvv",
  })
  @post("{id}")
  static createKvv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
