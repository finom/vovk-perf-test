import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iub")
export default class IubController {
  @operation({
    summary: "Get Iub",
  })
  @get()
  static getIub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iub",
  })
  @post("{id}")
  static createIub = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
