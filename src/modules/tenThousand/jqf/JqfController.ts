import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqf")
export default class JqfController {
  @operation({
    summary: "Get Jqf",
  })
  @get()
  static getJqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqf",
  })
  @post("{id}")
  static createJqf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
