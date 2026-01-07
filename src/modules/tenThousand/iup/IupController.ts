import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iup")
export default class IupController {
  @operation({
    summary: "Get Iup",
  })
  @get()
  static getIup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iup",
  })
  @post("{id}")
  static createIup = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
