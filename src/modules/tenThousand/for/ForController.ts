import { procedure, prefix, get, post, operation } from "vovk";

@prefix("for")
export default class ForController {
  @operation({
    summary: "Get For",
  })
  @get()
  static getFor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create For",
  })
  @post("{id}")
  static createFor = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
