import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ied")
export default class IedController {
  @operation({
    summary: "Get Ied",
  })
  @get()
  static getIed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ied",
  })
  @post("{id}")
  static createIed = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
