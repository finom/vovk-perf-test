import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzx")
export default class BzxController {
  @operation({
    summary: "Get Bzx",
  })
  @get()
  static getBzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzx",
  })
  @post("{id}")
  static createBzx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
