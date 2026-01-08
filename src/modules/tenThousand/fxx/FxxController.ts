import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxx")
export default class FxxController {
  @operation({
    summary: "Get Fxx",
  })
  @get()
  static getFxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxx",
  })
  @post("{id}")
  static createFxx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
