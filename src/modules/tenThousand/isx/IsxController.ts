import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isx")
export default class IsxController {
  @operation({
    summary: "Get Isx",
  })
  @get()
  static getIsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isx",
  })
  @post("{id}")
  static createIsx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
