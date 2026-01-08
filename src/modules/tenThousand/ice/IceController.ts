import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ice")
export default class IceController {
  @operation({
    summary: "Get Ice",
  })
  @get()
  static getIce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ice",
  })
  @post("{id}")
  static createIce = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
