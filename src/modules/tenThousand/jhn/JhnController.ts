import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhn")
export default class JhnController {
  @operation({
    summary: "Get Jhn",
  })
  @get()
  static getJhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhn",
  })
  @post("{id}")
  static createJhn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
