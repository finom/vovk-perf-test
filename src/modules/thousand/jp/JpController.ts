import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jp")
export default class JpController {
  @operation({
    summary: "Get Jp",
  })
  @get()
  static getJp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jp",
  })
  @post("{id}")
  static createJp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
