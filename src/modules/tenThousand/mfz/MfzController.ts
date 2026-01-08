import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfz")
export default class MfzController {
  @operation({
    summary: "Get Mfz",
  })
  @get()
  static getMfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfz",
  })
  @post("{id}")
  static createMfz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
