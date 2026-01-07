import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htf")
export default class HtfController {
  @operation({
    summary: "Get Htf",
  })
  @get()
  static getHtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htf",
  })
  @post("{id}")
  static createHtf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
