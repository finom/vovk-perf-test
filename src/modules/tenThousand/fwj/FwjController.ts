import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwj")
export default class FwjController {
  @operation({
    summary: "Get Fwj",
  })
  @get()
  static getFwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwj",
  })
  @post("{id}")
  static createFwj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
