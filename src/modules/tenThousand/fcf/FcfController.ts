import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcf")
export default class FcfController {
  @operation({
    summary: "Get Fcf",
  })
  @get()
  static getFcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcf",
  })
  @post("{id}")
  static createFcf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
