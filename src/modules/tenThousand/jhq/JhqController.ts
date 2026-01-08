import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhq")
export default class JhqController {
  @operation({
    summary: "Get Jhq",
  })
  @get()
  static getJhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhq",
  })
  @post("{id}")
  static createJhq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
