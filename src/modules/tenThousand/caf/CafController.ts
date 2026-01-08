import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("caf")
export default class CafController {
  @operation({
    summary: "Get Caf",
  })
  @get()
  static getCaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Caf",
  })
  @post("{id}")
  static createCaf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
