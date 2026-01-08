import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("is")
export default class IsController {
  @operation({
    summary: "Get Is",
  })
  @get()
  static getIs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Is",
  })
  @post("{id}")
  static createIs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
