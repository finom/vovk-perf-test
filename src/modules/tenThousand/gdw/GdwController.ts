import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdw")
export default class GdwController {
  @operation({
    summary: "Get Gdw",
  })
  @get()
  static getGdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdw",
  })
  @post("{id}")
  static createGdw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
