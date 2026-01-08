import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbr")
export default class CbrController {
  @operation({
    summary: "Get Cbr",
  })
  @get()
  static getCbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbr",
  })
  @post("{id}")
  static createCbr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
