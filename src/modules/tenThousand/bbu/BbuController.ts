import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbu")
export default class BbuController {
  @operation({
    summary: "Get Bbu",
  })
  @get()
  static getBbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbu",
  })
  @post("{id}")
  static createBbu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
