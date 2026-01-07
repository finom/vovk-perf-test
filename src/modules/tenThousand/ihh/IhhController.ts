import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihh")
export default class IhhController {
  @operation({
    summary: "Get Ihh",
  })
  @get()
  static getIhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihh",
  })
  @post("{id}")
  static createIhh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
