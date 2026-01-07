import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhc")
export default class JhcController {
  @operation({
    summary: "Get Jhc",
  })
  @get()
  static getJhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhc",
  })
  @post("{id}")
  static createJhc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
