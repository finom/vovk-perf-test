import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcs")
export default class HcsController {
  @operation({
    summary: "Get Hcs",
  })
  @get()
  static getHcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcs",
  })
  @post("{id}")
  static createHcs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
