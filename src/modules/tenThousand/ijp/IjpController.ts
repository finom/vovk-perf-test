import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijp")
export default class IjpController {
  @operation({
    summary: "Get Ijp",
  })
  @get()
  static getIjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijp",
  })
  @post("{id}")
  static createIjp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
