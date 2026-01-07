import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cow")
export default class CowController {
  @operation({
    summary: "Get Cow",
  })
  @get()
  static getCow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cow",
  })
  @post("{id}")
  static createCow = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
