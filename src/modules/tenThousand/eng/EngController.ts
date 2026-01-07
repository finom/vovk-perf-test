import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eng")
export default class EngController {
  @operation({
    summary: "Get Eng",
  })
  @get()
  static getEng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eng",
  })
  @post("{id}")
  static createEng = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
