import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axt")
export default class AxtController {
  @operation({
    summary: "Get Axt",
  })
  @get()
  static getAxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axt",
  })
  @post("{id}")
  static createAxt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
