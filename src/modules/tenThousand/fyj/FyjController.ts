import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyj")
export default class FyjController {
  @operation({
    summary: "Get Fyj",
  })
  @get()
  static getFyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyj",
  })
  @post("{id}")
  static createFyj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
