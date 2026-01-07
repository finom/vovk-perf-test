import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdk")
export default class FdkController {
  @operation({
    summary: "Get Fdk",
  })
  @get()
  static getFdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdk",
  })
  @post("{id}")
  static createFdk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
