import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bi")
export default class BiController {
  @operation({
    summary: "Get Bi",
  })
  @get()
  static getBi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bi",
  })
  @post("{id}")
  static createBi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
