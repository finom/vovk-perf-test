import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkf")
export default class LkfController {
  @operation({
    summary: "Get Lkf",
  })
  @get()
  static getLkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkf",
  })
  @post("{id}")
  static createLkf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
