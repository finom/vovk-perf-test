import { procedure, prefix, get, post, operation } from "vovk";

@prefix("si")
export default class SiController {
  @operation({
    summary: "Get Si",
  })
  @get()
  static getSi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Si",
  })
  @post("{id}")
  static createSi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
