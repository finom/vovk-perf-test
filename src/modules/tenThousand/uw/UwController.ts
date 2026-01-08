import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("uw")
export default class UwController {
  @operation({
    summary: "Get Uw",
  })
  @get()
  static getUw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uw",
  })
  @post("{id}")
  static createUw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
