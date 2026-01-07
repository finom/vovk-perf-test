import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzc")
export default class BzcController {
  @operation({
    summary: "Get Bzc",
  })
  @get()
  static getBzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzc",
  })
  @post("{id}")
  static createBzc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
