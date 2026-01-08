import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfh")
export default class BfhController {
  @operation({
    summary: "Get Bfh",
  })
  @get()
  static getBfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfh",
  })
  @post("{id}")
  static createBfh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
