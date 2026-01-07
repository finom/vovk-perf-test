import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cym")
export default class CymController {
  @operation({
    summary: "Get Cym",
  })
  @get()
  static getCym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cym",
  })
  @post("{id}")
  static createCym = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
