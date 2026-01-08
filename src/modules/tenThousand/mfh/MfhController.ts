import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfh")
export default class MfhController {
  @operation({
    summary: "Get Mfh",
  })
  @get()
  static getMfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfh",
  })
  @post("{id}")
  static createMfh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
