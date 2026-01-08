import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjm")
export default class HjmController {
  @operation({
    summary: "Get Hjm",
  })
  @get()
  static getHjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjm",
  })
  @post("{id}")
  static createHjm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
