import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwv")
export default class CwvController {
  @operation({
    summary: "Get Cwv",
  })
  @get()
  static getCwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwv",
  })
  @post("{id}")
  static createCwv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
