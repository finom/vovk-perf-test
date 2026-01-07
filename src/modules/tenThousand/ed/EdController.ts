import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ed")
export default class EdController {
  @operation({
    summary: "Get Ed",
  })
  @get()
  static getEd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ed",
  })
  @post("{id}")
  static createEd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
