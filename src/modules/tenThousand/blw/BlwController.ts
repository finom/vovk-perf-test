import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blw")
export default class BlwController {
  @operation({
    summary: "Get Blw",
  })
  @get()
  static getBlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blw",
  })
  @post("{id}")
  static createBlw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
