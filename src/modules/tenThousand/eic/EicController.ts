import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eic")
export default class EicController {
  @operation({
    summary: "Get Eic",
  })
  @get()
  static getEic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eic",
  })
  @post("{id}")
  static createEic = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
