import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hws")
export default class HwsController {
  @operation({
    summary: "Get Hws",
  })
  @get()
  static getHws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hws",
  })
  @post("{id}")
  static createHws = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
