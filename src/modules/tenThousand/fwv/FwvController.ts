import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwv")
export default class FwvController {
  @operation({
    summary: "Get Fwv",
  })
  @get()
  static getFwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwv",
  })
  @post("{id}")
  static createFwv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
