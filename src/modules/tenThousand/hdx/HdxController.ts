import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdx")
export default class HdxController {
  @operation({
    summary: "Get Hdx",
  })
  @get()
  static getHdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdx",
  })
  @post("{id}")
  static createHdx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
