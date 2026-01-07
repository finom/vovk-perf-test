import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivc")
export default class IvcController {
  @operation({
    summary: "Get Ivc",
  })
  @get()
  static getIvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivc",
  })
  @post("{id}")
  static createIvc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
