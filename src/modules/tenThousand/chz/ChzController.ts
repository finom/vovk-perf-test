import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chz")
export default class ChzController {
  @operation({
    summary: "Get Chz",
  })
  @get()
  static getChz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chz",
  })
  @post("{id}")
  static createChz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
