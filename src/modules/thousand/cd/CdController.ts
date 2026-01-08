import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cd")
export default class CdController {
  @operation({
    summary: "Get Cd",
  })
  @get()
  static getCd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cd",
  })
  @post("{id}")
  static createCd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
