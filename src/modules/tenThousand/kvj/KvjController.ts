import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvj")
export default class KvjController {
  @operation({
    summary: "Get Kvj",
  })
  @get()
  static getKvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvj",
  })
  @post("{id}")
  static createKvj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
