import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnb")
export default class BnbController {
  @operation({
    summary: "Get Bnb",
  })
  @get()
  static getBnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnb",
  })
  @post("{id}")
  static createBnb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
