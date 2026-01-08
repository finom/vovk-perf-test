import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhs")
export default class HhsController {
  @operation({
    summary: "Get Hhs",
  })
  @get()
  static getHhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhs",
  })
  @post("{id}")
  static createHhs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
