import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpa")
export default class LpaController {
  @operation({
    summary: "Get Lpa",
  })
  @get()
  static getLpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpa",
  })
  @post("{id}")
  static createLpa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
