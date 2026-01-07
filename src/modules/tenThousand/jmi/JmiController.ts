import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmi")
export default class JmiController {
  @operation({
    summary: "Get Jmi",
  })
  @get()
  static getJmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmi",
  })
  @post("{id}")
  static createJmi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
