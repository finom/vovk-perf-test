import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nav")
export default class NavController {
  @operation({
    summary: "Get Nav",
  })
  @get()
  static getNav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nav",
  })
  @post("{id}")
  static createNav = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
