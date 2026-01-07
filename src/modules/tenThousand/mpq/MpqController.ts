import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpq")
export default class MpqController {
  @operation({
    summary: "Get Mpq",
  })
  @get()
  static getMpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpq",
  })
  @post("{id}")
  static createMpq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
