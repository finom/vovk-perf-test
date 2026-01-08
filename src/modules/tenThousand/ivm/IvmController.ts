import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivm")
export default class IvmController {
  @operation({
    summary: "Get Ivm",
  })
  @get()
  static getIvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivm",
  })
  @post("{id}")
  static createIvm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
