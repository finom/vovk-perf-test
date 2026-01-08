import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eiy")
export default class EiyController {
  @operation({
    summary: "Get Eiy",
  })
  @get()
  static getEiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eiy",
  })
  @post("{id}")
  static createEiy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
