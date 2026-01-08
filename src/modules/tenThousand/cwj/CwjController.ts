import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwj")
export default class CwjController {
  @operation({
    summary: "Get Cwj",
  })
  @get()
  static getCwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwj",
  })
  @post("{id}")
  static createCwj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
