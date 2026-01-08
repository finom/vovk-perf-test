import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("has")
export default class HasController {
  @operation({
    summary: "Get Has",
  })
  @get()
  static getHas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Has",
  })
  @post("{id}")
  static createHas = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
