import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gug")
export default class GugController {
  @operation({
    summary: "Get Gug",
  })
  @get()
  static getGug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gug",
  })
  @post("{id}")
  static createGug = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
