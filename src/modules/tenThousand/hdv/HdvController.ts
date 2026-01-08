import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdv")
export default class HdvController {
  @operation({
    summary: "Get Hdv",
  })
  @get()
  static getHdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdv",
  })
  @post("{id}")
  static createHdv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
