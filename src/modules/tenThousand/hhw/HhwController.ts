import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhw")
export default class HhwController {
  @operation({
    summary: "Get Hhw",
  })
  @get()
  static getHhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhw",
  })
  @post("{id}")
  static createHhw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
