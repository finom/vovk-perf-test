import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cey")
export default class CeyController {
  @operation({
    summary: "Get Cey",
  })
  @get()
  static getCey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cey",
  })
  @post("{id}")
  static createCey = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
