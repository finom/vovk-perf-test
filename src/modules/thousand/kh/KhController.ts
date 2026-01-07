import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kh")
export default class KhController {
  @operation({
    summary: "Get Kh",
  })
  @get()
  static getKh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kh",
  })
  @post("{id}")
  static createKh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
