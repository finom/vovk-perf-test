import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvx")
export default class KvxController {
  @operation({
    summary: "Get Kvx",
  })
  @get()
  static getKvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvx",
  })
  @post("{id}")
  static createKvx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
