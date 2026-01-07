import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fet")
export default class FetController {
  @operation({
    summary: "Get Fet",
  })
  @get()
  static getFet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fet",
  })
  @post("{id}")
  static createFet = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
