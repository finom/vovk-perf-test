import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbr")
export default class BbrController {
  @operation({
    summary: "Get Bbr",
  })
  @get()
  static getBbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbr",
  })
  @post("{id}")
  static createBbr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
