import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhz")
export default class HhzController {
  @operation({
    summary: "Get Hhz",
  })
  @get()
  static getHhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhz",
  })
  @post("{id}")
  static createHhz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
