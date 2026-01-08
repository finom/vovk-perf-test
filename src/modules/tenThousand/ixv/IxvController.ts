import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixv")
export default class IxvController {
  @operation({
    summary: "Get Ixv",
  })
  @get()
  static getIxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixv",
  })
  @post("{id}")
  static createIxv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
