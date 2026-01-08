import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flx")
export default class FlxController {
  @operation({
    summary: "Get Flx",
  })
  @get()
  static getFlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flx",
  })
  @post("{id}")
  static createFlx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
