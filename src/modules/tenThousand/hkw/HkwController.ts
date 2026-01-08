import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkw")
export default class HkwController {
  @operation({
    summary: "Get Hkw",
  })
  @get()
  static getHkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkw",
  })
  @post("{id}")
  static createHkw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
