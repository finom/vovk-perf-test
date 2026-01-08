import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvp")
export default class KvpController {
  @operation({
    summary: "Get Kvp",
  })
  @get()
  static getKvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvp",
  })
  @post("{id}")
  static createKvp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
