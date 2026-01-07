import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvc")
export default class FvcController {
  @operation({
    summary: "Get Fvc",
  })
  @get()
  static getFvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvc",
  })
  @post("{id}")
  static createFvc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
