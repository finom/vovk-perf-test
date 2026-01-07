import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
