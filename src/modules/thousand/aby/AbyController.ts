import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aby")
export default class AbyController {
  @operation({
    summary: "Get Aby",
  })
  @get()
  static getAby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aby",
  })
  @post("{id}")
  static createAby = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
