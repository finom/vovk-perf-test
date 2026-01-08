import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikg")
export default class IkgController {
  @operation({
    summary: "Get Ikg",
  })
  @get()
  static getIkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikg",
  })
  @post("{id}")
  static createIkg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
