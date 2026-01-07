import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxt")
export default class CxtController {
  @operation({
    summary: "Get Cxt",
  })
  @get()
  static getCxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxt",
  })
  @post("{id}")
  static createCxt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
