import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ik")
export default class IkController {
  @operation({
    summary: "Get Ik",
  })
  @get()
  static getIk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ik",
  })
  @post("{id}")
  static createIk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
