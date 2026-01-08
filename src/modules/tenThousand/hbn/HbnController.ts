import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbn")
export default class HbnController {
  @operation({
    summary: "Get Hbn",
  })
  @get()
  static getHbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbn",
  })
  @post("{id}")
  static createHbn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
