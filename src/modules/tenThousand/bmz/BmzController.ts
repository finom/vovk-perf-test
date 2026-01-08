import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmz")
export default class BmzController {
  @operation({
    summary: "Get Bmz",
  })
  @get()
  static getBmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmz",
  })
  @post("{id}")
  static createBmz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
