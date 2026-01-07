import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyi")
export default class IyiController {
  @operation({
    summary: "Get Iyi",
  })
  @get()
  static getIyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyi",
  })
  @post("{id}")
  static createIyi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
