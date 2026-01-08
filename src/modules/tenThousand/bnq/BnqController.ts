import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnq")
export default class BnqController {
  @operation({
    summary: "Get Bnq",
  })
  @get()
  static getBnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnq",
  })
  @post("{id}")
  static createBnq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
