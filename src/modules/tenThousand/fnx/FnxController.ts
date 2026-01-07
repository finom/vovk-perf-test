import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnx")
export default class FnxController {
  @operation({
    summary: "Get Fnx",
  })
  @get()
  static getFnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnx",
  })
  @post("{id}")
  static createFnx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
