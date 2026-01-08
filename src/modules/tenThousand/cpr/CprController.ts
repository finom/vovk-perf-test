import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpr")
export default class CprController {
  @operation({
    summary: "Get Cpr",
  })
  @get()
  static getCpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpr",
  })
  @post("{id}")
  static createCpr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
