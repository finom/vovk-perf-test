import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msz")
export default class MszController {
  @operation({
    summary: "Get Msz",
  })
  @get()
  static getMsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msz",
  })
  @post("{id}")
  static createMsz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
