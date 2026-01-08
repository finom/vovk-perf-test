import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkp")
export default class HkpController {
  @operation({
    summary: "Get Hkp",
  })
  @get()
  static getHkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkp",
  })
  @post("{id}")
  static createHkp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
