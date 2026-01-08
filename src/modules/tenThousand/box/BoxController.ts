import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("box")
export default class BoxController {
  @operation({
    summary: "Get Box",
  })
  @get()
  static getBox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Box",
  })
  @post("{id}")
  static createBox = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
