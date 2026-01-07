import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyu")
export default class JyuController {
  @operation({
    summary: "Get Jyu",
  })
  @get()
  static getJyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyu",
  })
  @post("{id}")
  static createJyu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
