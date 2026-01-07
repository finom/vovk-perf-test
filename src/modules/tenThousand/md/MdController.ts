import { procedure, prefix, get, post, operation } from "vovk";

@prefix("md")
export default class MdController {
  @operation({
    summary: "Get Md",
  })
  @get()
  static getMd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Md",
  })
  @post("{id}")
  static createMd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
