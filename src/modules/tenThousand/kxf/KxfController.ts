import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxf")
export default class KxfController {
  @operation({
    summary: "Get Kxf",
  })
  @get()
  static getKxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxf",
  })
  @post("{id}")
  static createKxf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
