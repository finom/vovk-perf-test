import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpc")
export default class KpcController {
  @operation({
    summary: "Get Kpc",
  })
  @get()
  static getKpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpc",
  })
  @post("{id}")
  static createKpc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
