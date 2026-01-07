import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chu")
export default class ChuController {
  @operation({
    summary: "Get Chu",
  })
  @get()
  static getChu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chu",
  })
  @post("{id}")
  static createChu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
