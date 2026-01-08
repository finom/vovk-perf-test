import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjb")
export default class HjbController {
  @operation({
    summary: "Get Hjb",
  })
  @get()
  static getHjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjb",
  })
  @post("{id}")
  static createHjb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
