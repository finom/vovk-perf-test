import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("laq")
export default class LaqController {
  @operation({
    summary: "Get Laq",
  })
  @get()
  static getLaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Laq",
  })
  @post("{id}")
  static createLaq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
