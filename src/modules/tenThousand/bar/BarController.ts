import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bar")
export default class BarController {
  @operation({
    summary: "Get Bar",
  })
  @get()
  static getBar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bar",
  })
  @post("{id}")
  static createBar = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
