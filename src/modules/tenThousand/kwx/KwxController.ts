import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwx")
export default class KwxController {
  @operation({
    summary: "Get Kwx",
  })
  @get()
  static getKwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwx",
  })
  @post("{id}")
  static createKwx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
