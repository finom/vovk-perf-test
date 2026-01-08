import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrt")
export default class HrtController {
  @operation({
    summary: "Get Hrt",
  })
  @get()
  static getHrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrt",
  })
  @post("{id}")
  static createHrt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
