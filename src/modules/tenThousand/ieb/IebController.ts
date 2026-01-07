import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieb")
export default class IebController {
  @operation({
    summary: "Get Ieb",
  })
  @get()
  static getIeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ieb",
  })
  @post("{id}")
  static createIeb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
