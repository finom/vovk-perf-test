import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqi")
export default class JqiController {
  @operation({
    summary: "Get Jqi",
  })
  @get()
  static getJqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqi",
  })
  @post("{id}")
  static createJqi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
