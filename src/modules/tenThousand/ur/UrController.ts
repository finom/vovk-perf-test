import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ur")
export default class UrController {
  @operation({
    summary: "Get Ur",
  })
  @get()
  static getUr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ur",
  })
  @post("{id}")
  static createUr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
