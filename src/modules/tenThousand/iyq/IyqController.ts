import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyq")
export default class IyqController {
  @operation({
    summary: "Get Iyq",
  })
  @get()
  static getIyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyq",
  })
  @post("{id}")
  static createIyq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
