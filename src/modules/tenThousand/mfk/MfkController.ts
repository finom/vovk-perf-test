import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfk")
export default class MfkController {
  @operation({
    summary: "Get Mfk",
  })
  @get()
  static getMfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfk",
  })
  @post("{id}")
  static createMfk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
