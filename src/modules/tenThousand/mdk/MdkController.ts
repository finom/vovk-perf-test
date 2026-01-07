import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdk")
export default class MdkController {
  @operation({
    summary: "Get Mdk",
  })
  @get()
  static getMdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdk",
  })
  @post("{id}")
  static createMdk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
