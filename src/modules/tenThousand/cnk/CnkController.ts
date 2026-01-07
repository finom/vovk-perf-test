import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnk")
export default class CnkController {
  @operation({
    summary: "Get Cnk",
  })
  @get()
  static getCnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnk",
  })
  @post("{id}")
  static createCnk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
