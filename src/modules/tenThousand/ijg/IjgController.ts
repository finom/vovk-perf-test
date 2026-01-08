import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijg")
export default class IjgController {
  @operation({
    summary: "Get Ijg",
  })
  @get()
  static getIjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijg",
  })
  @post("{id}")
  static createIjg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
