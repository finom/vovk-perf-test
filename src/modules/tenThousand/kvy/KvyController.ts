import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvy")
export default class KvyController {
  @operation({
    summary: "Get Kvy",
  })
  @get()
  static getKvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvy",
  })
  @post("{id}")
  static createKvy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
