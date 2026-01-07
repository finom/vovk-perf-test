import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iac")
export default class IacController {
  @operation({
    summary: "Get Iac",
  })
  @get()
  static getIac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iac",
  })
  @post("{id}")
  static createIac = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
