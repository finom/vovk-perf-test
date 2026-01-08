import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hug")
export default class HugController {
  @operation({
    summary: "Get Hug",
  })
  @get()
  static getHug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hug",
  })
  @post("{id}")
  static createHug = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
