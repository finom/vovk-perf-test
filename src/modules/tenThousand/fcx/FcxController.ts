import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcx")
export default class FcxController {
  @operation({
    summary: "Get Fcx",
  })
  @get()
  static getFcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcx",
  })
  @post("{id}")
  static createFcx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
