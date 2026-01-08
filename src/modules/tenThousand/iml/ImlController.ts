import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iml")
export default class ImlController {
  @operation({
    summary: "Get Iml",
  })
  @get()
  static getIml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iml",
  })
  @post("{id}")
  static createIml = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
