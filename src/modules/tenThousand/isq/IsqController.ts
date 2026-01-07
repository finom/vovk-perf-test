import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isq")
export default class IsqController {
  @operation({
    summary: "Get Isq",
  })
  @get()
  static getIsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isq",
  })
  @post("{id}")
  static createIsq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
