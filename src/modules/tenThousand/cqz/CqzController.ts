import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqz")
export default class CqzController {
  @operation({
    summary: "Get Cqz",
  })
  @get()
  static getCqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqz",
  })
  @post("{id}")
  static createCqz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
