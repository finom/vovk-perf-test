import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivy")
export default class IvyController {
  @operation({
    summary: "Get Ivy",
  })
  @get()
  static getIvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivy",
  })
  @post("{id}")
  static createIvy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
