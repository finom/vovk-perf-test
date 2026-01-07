import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbt")
export default class LbtController {
  @operation({
    summary: "Get Lbt",
  })
  @get()
  static getLbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbt",
  })
  @post("{id}")
  static createLbt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
