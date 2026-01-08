import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbf")
export default class BbfController {
  @operation({
    summary: "Get Bbf",
  })
  @get()
  static getBbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbf",
  })
  @post("{id}")
  static createBbf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
