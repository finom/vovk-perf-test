import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdc")
export default class GdcController {
  @operation({
    summary: "Get Gdc",
  })
  @get()
  static getGdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdc",
  })
  @post("{id}")
  static createGdc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
