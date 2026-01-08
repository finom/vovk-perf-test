import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hat")
export default class HatController {
  @operation({
    summary: "Get Hat",
  })
  @get()
  static getHat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hat",
  })
  @post("{id}")
  static createHat = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
