import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eba")
export default class EbaController {
  @operation({
    summary: "Get Eba",
  })
  @get()
  static getEba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eba",
  })
  @post("{id}")
  static createEba = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
