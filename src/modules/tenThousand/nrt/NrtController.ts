import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrt")
export default class NrtController {
  @operation({
    summary: "Get Nrt",
  })
  @get()
  static getNrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrt",
  })
  @post("{id}")
  static createNrt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
