import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yg")
export default class YgController {
  @operation({
    summary: "Get Yg",
  })
  @get()
  static getYg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yg",
  })
  @post("{id}")
  static createYg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
