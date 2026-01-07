import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdf")
export default class JdfController {
  @operation({
    summary: "Get Jdf",
  })
  @get()
  static getJdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdf",
  })
  @post("{id}")
  static createJdf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
