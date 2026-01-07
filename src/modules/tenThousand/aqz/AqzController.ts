import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqz")
export default class AqzController {
  @operation({
    summary: "Get Aqz",
  })
  @get()
  static getAqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqz",
  })
  @post("{id}")
  static createAqz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
