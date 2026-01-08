import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("baz")
export default class BazController {
  @operation({
    summary: "Get Baz",
  })
  @get()
  static getBaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Baz",
  })
  @post("{id}")
  static createBaz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
