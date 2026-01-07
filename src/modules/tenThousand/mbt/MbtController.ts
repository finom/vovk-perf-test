import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbt")
export default class MbtController {
  @operation({
    summary: "Get Mbt",
  })
  @get()
  static getMbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbt",
  })
  @post("{id}")
  static createMbt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
