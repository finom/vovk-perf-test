import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsx")
export default class HsxController {
  @operation({
    summary: "Get Hsx",
  })
  @get()
  static getHsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsx",
  })
  @post("{id}")
  static createHsx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
