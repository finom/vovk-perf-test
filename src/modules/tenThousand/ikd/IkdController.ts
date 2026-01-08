import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikd")
export default class IkdController {
  @operation({
    summary: "Get Ikd",
  })
  @get()
  static getIkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikd",
  })
  @post("{id}")
  static createIkd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
