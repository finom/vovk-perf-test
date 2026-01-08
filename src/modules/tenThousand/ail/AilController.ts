import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ail")
export default class AilController {
  @operation({
    summary: "Get Ail",
  })
  @get()
  static getAil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ail",
  })
  @post("{id}")
  static createAil = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
