import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijx")
export default class IjxController {
  @operation({
    summary: "Get Ijx",
  })
  @get()
  static getIjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijx",
  })
  @post("{id}")
  static createIjx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
