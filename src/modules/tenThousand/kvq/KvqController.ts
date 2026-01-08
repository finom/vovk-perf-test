import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvq")
export default class KvqController {
  @operation({
    summary: "Get Kvq",
  })
  @get()
  static getKvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvq",
  })
  @post("{id}")
  static createKvq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
