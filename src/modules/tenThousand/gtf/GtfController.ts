import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtf")
export default class GtfController {
  @operation({
    summary: "Get Gtf",
  })
  @get()
  static getGtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtf",
  })
  @post("{id}")
  static createGtf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
