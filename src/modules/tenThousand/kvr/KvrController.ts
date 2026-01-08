import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvr")
export default class KvrController {
  @operation({
    summary: "Get Kvr",
  })
  @get()
  static getKvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvr",
  })
  @post("{id}")
  static createKvr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
