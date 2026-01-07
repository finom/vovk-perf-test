import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arr")
export default class ArrController {
  @operation({
    summary: "Get Arr",
  })
  @get()
  static getArr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arr",
  })
  @post("{id}")
  static createArr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
