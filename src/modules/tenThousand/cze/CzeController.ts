import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cze")
export default class CzeController {
  @operation({
    summary: "Get Cze",
  })
  @get()
  static getCze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cze",
  })
  @post("{id}")
  static createCze = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
