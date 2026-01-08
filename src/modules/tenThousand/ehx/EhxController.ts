import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehx")
export default class EhxController {
  @operation({
    summary: "Get Ehx",
  })
  @get()
  static getEhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehx",
  })
  @post("{id}")
  static createEhx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
