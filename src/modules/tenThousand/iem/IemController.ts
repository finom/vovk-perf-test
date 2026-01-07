import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iem")
export default class IemController {
  @operation({
    summary: "Get Iem",
  })
  @get()
  static getIem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iem",
  })
  @post("{id}")
  static createIem = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
