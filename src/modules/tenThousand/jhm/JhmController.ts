import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhm")
export default class JhmController {
  @operation({
    summary: "Get Jhm",
  })
  @get()
  static getJhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhm",
  })
  @post("{id}")
  static createJhm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
