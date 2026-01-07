import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ih")
export default class IhController {
  @operation({
    summary: "Get Ih",
  })
  @get()
  static getIh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ih",
  })
  @post("{id}")
  static createIh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
