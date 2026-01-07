import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxf")
export default class JxfController {
  @operation({
    summary: "Get Jxf",
  })
  @get()
  static getJxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxf",
  })
  @post("{id}")
  static createJxf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
