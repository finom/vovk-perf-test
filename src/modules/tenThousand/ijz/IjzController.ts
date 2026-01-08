import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijz")
export default class IjzController {
  @operation({
    summary: "Get Ijz",
  })
  @get()
  static getIjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijz",
  })
  @post("{id}")
  static createIjz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
