import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ili")
export default class IliController {
  @operation({
    summary: "Get Ili",
  })
  @get()
  static getIli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ili",
  })
  @post("{id}")
  static createIli = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
