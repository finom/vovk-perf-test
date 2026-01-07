import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpx")
export default class KpxController {
  @operation({
    summary: "Get Kpx",
  })
  @get()
  static getKpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpx",
  })
  @post("{id}")
  static createKpx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
