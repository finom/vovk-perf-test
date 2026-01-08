import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msp")
export default class MspController {
  @operation({
    summary: "Get Msp",
  })
  @get()
  static getMsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msp",
  })
  @post("{id}")
  static createMsp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
