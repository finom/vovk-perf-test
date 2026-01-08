import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hse")
export default class HseController {
  @operation({
    summary: "Get Hse",
  })
  @get()
  static getHse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hse",
  })
  @post("{id}")
  static createHse = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
