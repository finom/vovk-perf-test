import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqz")
export default class BqzController {
  @operation({
    summary: "Get Bqz",
  })
  @get()
  static getBqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqz",
  })
  @post("{id}")
  static createBqz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
