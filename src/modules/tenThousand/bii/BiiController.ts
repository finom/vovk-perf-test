import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bii")
export default class BiiController {
  @operation({
    summary: "Get Bii",
  })
  @get()
  static getBii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bii",
  })
  @post("{id}")
  static createBii = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
