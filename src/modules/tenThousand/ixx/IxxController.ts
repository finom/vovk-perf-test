import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixx")
export default class IxxController {
  @operation({
    summary: "Get Ixx",
  })
  @get()
  static getIxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixx",
  })
  @post("{id}")
  static createIxx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
