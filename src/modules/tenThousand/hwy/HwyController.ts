import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwy")
export default class HwyController {
  @operation({
    summary: "Get Hwy",
  })
  @get()
  static getHwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwy",
  })
  @post("{id}")
  static createHwy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
