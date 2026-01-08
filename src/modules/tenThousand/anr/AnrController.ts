import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("anr")
export default class AnrController {
  @operation({
    summary: "Get Anr",
  })
  @get()
  static getAnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anr",
  })
  @post("{id}")
  static createAnr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
