import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsx")
export default class BsxController {
  @operation({
    summary: "Get Bsx",
  })
  @get()
  static getBsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsx",
  })
  @post("{id}")
  static createBsx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
