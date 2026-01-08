import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cck")
export default class CckController {
  @operation({
    summary: "Get Cck",
  })
  @get()
  static getCck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cck",
  })
  @post("{id}")
  static createCck = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
