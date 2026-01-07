import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igx")
export default class IgxController {
  @operation({
    summary: "Get Igx",
  })
  @get()
  static getIgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igx",
  })
  @post("{id}")
  static createIgx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
