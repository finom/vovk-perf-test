import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsv")
export default class DsvController {
  @operation({
    summary: "Get Dsv",
  })
  @get()
  static getDsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsv",
  })
  @post("{id}")
  static createDsv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
