import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyw")
export default class IywController {
  @operation({
    summary: "Get Iyw",
  })
  @get()
  static getIyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyw",
  })
  @post("{id}")
  static createIyw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
