import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfc")
export default class LfcController {
  @operation({
    summary: "Get Lfc",
  })
  @get()
  static getLfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfc",
  })
  @post("{id}")
  static createLfc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
