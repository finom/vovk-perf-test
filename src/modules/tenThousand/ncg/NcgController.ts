import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncg")
export default class NcgController {
  @operation({
    summary: "Get Ncg",
  })
  @get()
  static getNcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncg",
  })
  @post("{id}")
  static createNcg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
