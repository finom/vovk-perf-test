import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcm")
export default class FcmController {
  @operation({
    summary: "Get Fcm",
  })
  @get()
  static getFcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcm",
  })
  @post("{id}")
  static createFcm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
