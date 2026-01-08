import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("man")
export default class ManController {
  @operation({
    summary: "Get Man",
  })
  @get()
  static getMan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Man",
  })
  @post("{id}")
  static createMan = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
