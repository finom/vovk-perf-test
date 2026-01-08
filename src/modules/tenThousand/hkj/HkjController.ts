import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkj")
export default class HkjController {
  @operation({
    summary: "Get Hkj",
  })
  @get()
  static getHkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkj",
  })
  @post("{id}")
  static createHkj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
