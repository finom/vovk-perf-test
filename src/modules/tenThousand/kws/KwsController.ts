import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kws")
export default class KwsController {
  @operation({
    summary: "Get Kws",
  })
  @get()
  static getKws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kws",
  })
  @post("{id}")
  static createKws = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
