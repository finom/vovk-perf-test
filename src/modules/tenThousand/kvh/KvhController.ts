import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvh")
export default class KvhController {
  @operation({
    summary: "Get Kvh",
  })
  @get()
  static getKvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvh",
  })
  @post("{id}")
  static createKvh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
