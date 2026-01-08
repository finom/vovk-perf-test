import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iiz")
export default class IizController {
  @operation({
    summary: "Get Iiz",
  })
  @get()
  static getIiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iiz",
  })
  @post("{id}")
  static createIiz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
