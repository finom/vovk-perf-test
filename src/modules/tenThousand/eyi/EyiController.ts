import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyi")
export default class EyiController {
  @operation({
    summary: "Get Eyi",
  })
  @get()
  static getEyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyi",
  })
  @post("{id}")
  static createEyi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
