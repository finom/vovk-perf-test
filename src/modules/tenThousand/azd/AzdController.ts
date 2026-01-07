import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azd")
export default class AzdController {
  @operation({
    summary: "Get Azd",
  })
  @get()
  static getAzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azd",
  })
  @post("{id}")
  static createAzd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
