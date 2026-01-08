import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmt")
export default class BmtController {
  @operation({
    summary: "Get Bmt",
  })
  @get()
  static getBmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmt",
  })
  @post("{id}")
  static createBmt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
