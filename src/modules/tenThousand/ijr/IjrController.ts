import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijr")
export default class IjrController {
  @operation({
    summary: "Get Ijr",
  })
  @get()
  static getIjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijr",
  })
  @post("{id}")
  static createIjr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
