import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnc")
export default class CncController {
  @operation({
    summary: "Get Cnc",
  })
  @get()
  static getCnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnc",
  })
  @post("{id}")
  static createCnc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
