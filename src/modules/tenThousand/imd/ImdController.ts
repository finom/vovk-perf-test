import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imd")
export default class ImdController {
  @operation({
    summary: "Get Imd",
  })
  @get()
  static getImd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imd",
  })
  @post("{id}")
  static createImd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
