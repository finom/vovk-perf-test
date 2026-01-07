import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msn")
export default class MsnController {
  @operation({
    summary: "Get Msn",
  })
  @get()
  static getMsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msn",
  })
  @post("{id}")
  static createMsn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
