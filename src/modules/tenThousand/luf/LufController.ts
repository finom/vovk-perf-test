import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("luf")
export default class LufController {
  @operation({
    summary: "Get Luf",
  })
  @get()
  static getLuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Luf",
  })
  @post("{id}")
  static createLuf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
