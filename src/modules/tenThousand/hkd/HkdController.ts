import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkd")
export default class HkdController {
  @operation({
    summary: "Get Hkd",
  })
  @get()
  static getHkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkd",
  })
  @post("{id}")
  static createHkd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
