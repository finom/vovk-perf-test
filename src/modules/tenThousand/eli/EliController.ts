import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eli")
export default class EliController {
  @operation({
    summary: "Get Eli",
  })
  @get()
  static getEli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eli",
  })
  @post("{id}")
  static createEli = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
