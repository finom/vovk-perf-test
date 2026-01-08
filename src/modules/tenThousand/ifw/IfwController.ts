import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifw")
export default class IfwController {
  @operation({
    summary: "Get Ifw",
  })
  @get()
  static getIfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifw",
  })
  @post("{id}")
  static createIfw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
