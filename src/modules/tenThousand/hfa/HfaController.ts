import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfa")
export default class HfaController {
  @operation({
    summary: "Get Hfa",
  })
  @get()
  static getHfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfa",
  })
  @post("{id}")
  static createHfa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
