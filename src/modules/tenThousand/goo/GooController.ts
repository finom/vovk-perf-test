import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("goo")
export default class GooController {
  @operation({
    summary: "Get Goo",
  })
  @get()
  static getGoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Goo",
  })
  @post("{id}")
  static createGoo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
