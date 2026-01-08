import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbw")
export default class HbwController {
  @operation({
    summary: "Get Hbw",
  })
  @get()
  static getHbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbw",
  })
  @post("{id}")
  static createHbw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
