import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dss")
export default class DssController {
  @operation({
    summary: "Get Dss",
  })
  @get()
  static getDss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dss",
  })
  @post("{id}")
  static createDss = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
