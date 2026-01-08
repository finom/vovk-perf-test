import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvf")
export default class KvfController {
  @operation({
    summary: "Get Kvf",
  })
  @get()
  static getKvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvf",
  })
  @post("{id}")
  static createKvf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
