import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhz")
export default class LhzController {
  @operation({
    summary: "Get Lhz",
  })
  @get()
  static getLhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhz",
  })
  @post("{id}")
  static createLhz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
