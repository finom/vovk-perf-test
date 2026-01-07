import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpq")
export default class JpqController {
  @operation({
    summary: "Get Jpq",
  })
  @get()
  static getJpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpq",
  })
  @post("{id}")
  static createJpq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
