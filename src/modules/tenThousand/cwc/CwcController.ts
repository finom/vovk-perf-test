import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwc")
export default class CwcController {
  @operation({
    summary: "Get Cwc",
  })
  @get()
  static getCwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwc",
  })
  @post("{id}")
  static createCwc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
