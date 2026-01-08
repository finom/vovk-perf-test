import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bri")
export default class BriController {
  @operation({
    summary: "Get Bri",
  })
  @get()
  static getBri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bri",
  })
  @post("{id}")
  static createBri = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
