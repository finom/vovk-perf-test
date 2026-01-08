import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijq")
export default class IjqController {
  @operation({
    summary: "Get Ijq",
  })
  @get()
  static getIjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijq",
  })
  @post("{id}")
  static createIjq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
