import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkf")
export default class BkfController {
  @operation({
    summary: "Get Bkf",
  })
  @get()
  static getBkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkf",
  })
  @post("{id}")
  static createBkf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
