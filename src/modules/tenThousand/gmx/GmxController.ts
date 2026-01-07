import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmx")
export default class GmxController {
  @operation({
    summary: "Get Gmx",
  })
  @get()
  static getGmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmx",
  })
  @post("{id}")
  static createGmx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
