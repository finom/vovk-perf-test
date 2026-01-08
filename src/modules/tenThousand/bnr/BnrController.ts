import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnr")
export default class BnrController {
  @operation({
    summary: "Get Bnr",
  })
  @get()
  static getBnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnr",
  })
  @post("{id}")
  static createBnr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
