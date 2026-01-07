import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iav")
export default class IavController {
  @operation({
    summary: "Get Iav",
  })
  @get()
  static getIav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iav",
  })
  @post("{id}")
  static createIav = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
