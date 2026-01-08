import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyh")
export default class HyhController {
  @operation({
    summary: "Get Hyh",
  })
  @get()
  static getHyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyh",
  })
  @post("{id}")
  static createHyh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
