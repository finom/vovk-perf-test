import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("am")
export default class AmController {
  @operation({
    summary: "Get Am",
  })
  @get()
  static getAm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Am",
  })
  @post("{id}")
  static createAm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
