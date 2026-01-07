import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lic")
export default class LicController {
  @operation({
    summary: "Get Lic",
  })
  @get()
  static getLic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lic",
  })
  @post("{id}")
  static createLic = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
