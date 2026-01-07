import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bau")
export default class BauController {
  @operation({
    summary: "Get Bau",
  })
  @get()
  static getBau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bau",
  })
  @post("{id}")
  static createBau = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
