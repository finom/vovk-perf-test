import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("s")
export default class SController {
  @operation({
    summary: "Get S",
  })
  @get()
  static getS = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create S",
  })
  @post("{id}")
  static createS = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
