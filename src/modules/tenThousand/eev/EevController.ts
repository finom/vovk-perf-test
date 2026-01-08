import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eev")
export default class EevController {
  @operation({
    summary: "Get Eev",
  })
  @get()
  static getEev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eev",
  })
  @post("{id}")
  static createEev = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
