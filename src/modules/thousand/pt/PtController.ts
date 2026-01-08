import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pt")
export default class PtController {
  @operation({
    summary: "Get Pt",
  })
  @get()
  static getPt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pt",
  })
  @post("{id}")
  static createPt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
