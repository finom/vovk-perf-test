import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxx")
export default class HxxController {
  @operation({
    summary: "Get Hxx",
  })
  @get()
  static getHxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxx",
  })
  @post("{id}")
  static createHxx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
