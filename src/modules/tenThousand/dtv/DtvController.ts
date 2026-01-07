import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtv")
export default class DtvController {
  @operation({
    summary: "Get Dtv",
  })
  @get()
  static getDtv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtv",
  })
  @post("{id}")
  static createDtv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
