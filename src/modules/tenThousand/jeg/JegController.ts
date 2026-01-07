import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jeg")
export default class JegController {
  @operation({
    summary: "Get Jeg",
  })
  @get()
  static getJeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jeg",
  })
  @post("{id}")
  static createJeg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
