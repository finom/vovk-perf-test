import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsn")
export default class DsnController {
  @operation({
    summary: "Get Dsn",
  })
  @get()
  static getDsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsn",
  })
  @post("{id}")
  static createDsn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
