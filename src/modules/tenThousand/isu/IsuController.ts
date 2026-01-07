import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isu")
export default class IsuController {
  @operation({
    summary: "Get Isu",
  })
  @get()
  static getIsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isu",
  })
  @post("{id}")
  static createIsu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
