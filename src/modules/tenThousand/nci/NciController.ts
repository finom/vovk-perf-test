import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nci")
export default class NciController {
  @operation({
    summary: "Get Nci",
  })
  @get()
  static getNci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nci",
  })
  @post("{id}")
  static createNci = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
