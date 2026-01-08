import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilt")
export default class IltController {
  @operation({
    summary: "Get Ilt",
  })
  @get()
  static getIlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilt",
  })
  @post("{id}")
  static createIlt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
