import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsd")
export default class BsdController {
  @operation({
    summary: "Get Bsd",
  })
  @get()
  static getBsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsd",
  })
  @post("{id}")
  static createBsd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
