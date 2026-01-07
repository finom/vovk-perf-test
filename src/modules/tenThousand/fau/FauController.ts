import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fau")
export default class FauController {
  @operation({
    summary: "Get Fau",
  })
  @get()
  static getFau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fau",
  })
  @post("{id}")
  static createFau = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
