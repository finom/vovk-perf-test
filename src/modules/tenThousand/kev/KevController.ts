import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kev")
export default class KevController {
  @operation({
    summary: "Get Kev",
  })
  @get()
  static getKev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kev",
  })
  @post("{id}")
  static createKev = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
