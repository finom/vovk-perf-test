import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cob")
export default class CobController {
  @operation({
    summary: "Get Cob",
  })
  @get()
  static getCob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cob",
  })
  @post("{id}")
  static createCob = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
