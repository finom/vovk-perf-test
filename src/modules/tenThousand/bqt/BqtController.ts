import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqt")
export default class BqtController {
  @operation({
    summary: "Get Bqt",
  })
  @get()
  static getBqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqt",
  })
  @post("{id}")
  static createBqt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
