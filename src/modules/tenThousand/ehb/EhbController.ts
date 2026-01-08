import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehb")
export default class EhbController {
  @operation({
    summary: "Get Ehb",
  })
  @get()
  static getEhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehb",
  })
  @post("{id}")
  static createEhb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
