import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcd")
export default class BcdController {
  @operation({
    summary: "Get Bcd",
  })
  @get()
  static getBcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcd",
  })
  @post("{id}")
  static createBcd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
