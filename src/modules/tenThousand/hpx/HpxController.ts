import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpx")
export default class HpxController {
  @operation({
    summary: "Get Hpx",
  })
  @get()
  static getHpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpx",
  })
  @post("{id}")
  static createHpx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
