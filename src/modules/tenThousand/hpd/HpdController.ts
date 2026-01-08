import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpd")
export default class HpdController {
  @operation({
    summary: "Get Hpd",
  })
  @get()
  static getHpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpd",
  })
  @post("{id}")
  static createHpd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
