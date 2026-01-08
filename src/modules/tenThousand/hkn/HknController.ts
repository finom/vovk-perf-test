import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkn")
export default class HknController {
  @operation({
    summary: "Get Hkn",
  })
  @get()
  static getHkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkn",
  })
  @post("{id}")
  static createHkn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
