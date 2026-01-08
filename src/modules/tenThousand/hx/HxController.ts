import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hx")
export default class HxController {
  @operation({
    summary: "Get Hx",
  })
  @get()
  static getHx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hx",
  })
  @post("{id}")
  static createHx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
