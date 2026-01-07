import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhg")
export default class JhgController {
  @operation({
    summary: "Get Jhg",
  })
  @get()
  static getJhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhg",
  })
  @post("{id}")
  static createJhg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
