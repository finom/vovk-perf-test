import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afb")
export default class AfbController {
  @operation({
    summary: "Get Afb",
  })
  @get()
  static getAfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afb",
  })
  @post("{id}")
  static createAfb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
