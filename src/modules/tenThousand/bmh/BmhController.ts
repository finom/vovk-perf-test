import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmh")
export default class BmhController {
  @operation({
    summary: "Get Bmh",
  })
  @get()
  static getBmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmh",
  })
  @post("{id}")
  static createBmh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
