import { procedure, prefix, get, post, operation } from "vovk";

@prefix("int")
export default class IntController {
  @operation({
    summary: "Get Int",
  })
  @get()
  static getInt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Int",
  })
  @post("{id}")
  static createInt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
