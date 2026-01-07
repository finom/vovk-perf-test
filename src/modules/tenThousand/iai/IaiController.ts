import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iai")
export default class IaiController {
  @operation({
    summary: "Get Iai",
  })
  @get()
  static getIai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iai",
  })
  @post("{id}")
  static createIai = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
