import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvc")
export default class KvcController {
  @operation({
    summary: "Get Kvc",
  })
  @get()
  static getKvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvc",
  })
  @post("{id}")
  static createKvc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
