import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clj")
export default class CljController {
  @operation({
    summary: "Get Clj",
  })
  @get()
  static getClj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clj",
  })
  @post("{id}")
  static createClj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
