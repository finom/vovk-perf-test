import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("r")
export default class RController {
  @operation({
    summary: "Get R",
  })
  @get()
  static getR = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create R",
  })
  @post("{id}")
  static createR = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
