import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("laf")
export default class LafController {
  @operation({
    summary: "Get Laf",
  })
  @get()
  static getLaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Laf",
  })
  @post("{id}")
  static createLaf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
