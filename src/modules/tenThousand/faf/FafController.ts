import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("faf")
export default class FafController {
  @operation({
    summary: "Get Faf",
  })
  @get()
  static getFaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Faf",
  })
  @post("{id}")
  static createFaf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
