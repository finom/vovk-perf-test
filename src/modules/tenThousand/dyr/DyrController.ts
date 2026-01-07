import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyr")
export default class DyrController {
  @operation({
    summary: "Get Dyr",
  })
  @get()
  static getDyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyr",
  })
  @post("{id}")
  static createDyr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
