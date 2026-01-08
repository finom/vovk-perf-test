import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ere")
export default class EreController {
  @operation({
    summary: "Get Ere",
  })
  @get()
  static getEre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ere",
  })
  @post("{id}")
  static createEre = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
