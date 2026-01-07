import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbx")
export default class GbxController {
  @operation({
    summary: "Get Gbx",
  })
  @get()
  static getGbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbx",
  })
  @post("{id}")
  static createGbx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
