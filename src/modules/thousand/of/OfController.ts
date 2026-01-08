import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("of")
export default class OfController {
  @operation({
    summary: "Get Of",
  })
  @get()
  static getOf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Of",
  })
  @post("{id}")
  static createOf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
