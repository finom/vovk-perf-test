import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijf")
export default class IjfController {
  @operation({
    summary: "Get Ijf",
  })
  @get()
  static getIjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijf",
  })
  @post("{id}")
  static createIjf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
