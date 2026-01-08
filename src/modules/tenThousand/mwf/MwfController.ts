import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwf")
export default class MwfController {
  @operation({
    summary: "Get Mwf",
  })
  @get()
  static getMwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwf",
  })
  @post("{id}")
  static createMwf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
