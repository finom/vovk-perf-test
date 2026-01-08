import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifv")
export default class IfvController {
  @operation({
    summary: "Get Ifv",
  })
  @get()
  static getIfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifv",
  })
  @post("{id}")
  static createIfv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
