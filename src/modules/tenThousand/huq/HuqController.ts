import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huq")
export default class HuqController {
  @operation({
    summary: "Get Huq",
  })
  @get()
  static getHuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Huq",
  })
  @post("{id}")
  static createHuq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
