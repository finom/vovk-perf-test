import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("min")
export default class MinController {
  @operation({
    summary: "Get Min",
  })
  @get()
  static getMin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Min",
  })
  @post("{id}")
  static createMin = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
