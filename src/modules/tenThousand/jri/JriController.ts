import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jri")
export default class JriController {
  @operation({
    summary: "Get Jri",
  })
  @get()
  static getJri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jri",
  })
  @post("{id}")
  static createJri = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
