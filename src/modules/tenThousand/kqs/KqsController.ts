import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqs")
export default class KqsController {
  @operation({
    summary: "Get Kqs",
  })
  @get()
  static getKqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqs",
  })
  @post("{id}")
  static createKqs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
