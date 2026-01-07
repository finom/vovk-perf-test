import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyu")
export default class IyuController {
  @operation({
    summary: "Get Iyu",
  })
  @get()
  static getIyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyu",
  })
  @post("{id}")
  static createIyu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
