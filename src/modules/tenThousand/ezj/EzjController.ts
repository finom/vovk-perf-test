import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezj")
export default class EzjController {
  @operation({
    summary: "Get Ezj",
  })
  @get()
  static getEzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezj",
  })
  @post("{id}")
  static createEzj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
