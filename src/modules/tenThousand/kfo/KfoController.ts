import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfo")
export default class KfoController {
  @operation({
    summary: "Get Kfo",
  })
  @get()
  static getKfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfo",
  })
  @post("{id}")
  static createKfo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
