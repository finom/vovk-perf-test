import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("baq")
export default class BaqController {
  @operation({
    summary: "Get Baq",
  })
  @get()
  static getBaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Baq",
  })
  @post("{id}")
  static createBaq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
