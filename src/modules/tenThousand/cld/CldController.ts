import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cld")
export default class CldController {
  @operation({
    summary: "Get Cld",
  })
  @get()
  static getCld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cld",
  })
  @post("{id}")
  static createCld = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
