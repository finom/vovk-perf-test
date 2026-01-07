import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asp")
export default class AspController {
  @operation({
    summary: "Get Asp",
  })
  @get()
  static getAsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asp",
  })
  @post("{id}")
  static createAsp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
