import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncl")
export default class NclController {
  @operation({
    summary: "Get Ncl",
  })
  @get()
  static getNcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncl",
  })
  @post("{id}")
  static createNcl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
