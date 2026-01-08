import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijc")
export default class IjcController {
  @operation({
    summary: "Get Ijc",
  })
  @get()
  static getIjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijc",
  })
  @post("{id}")
  static createIjc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
