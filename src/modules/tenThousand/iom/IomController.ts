import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iom")
export default class IomController {
  @operation({
    summary: "Get Iom",
  })
  @get()
  static getIom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iom",
  })
  @post("{id}")
  static createIom = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
