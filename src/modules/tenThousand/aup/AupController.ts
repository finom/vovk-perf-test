import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aup")
export default class AupController {
  @operation({
    summary: "Get Aup",
  })
  @get()
  static getAup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aup",
  })
  @post("{id}")
  static createAup = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
