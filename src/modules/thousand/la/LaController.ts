import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("la")
export default class LaController {
  @operation({
    summary: "Get La",
  })
  @get()
  static getLa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create La",
  })
  @post("{id}")
  static createLa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
