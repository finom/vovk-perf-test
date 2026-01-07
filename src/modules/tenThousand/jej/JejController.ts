import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jej")
export default class JejController {
  @operation({
    summary: "Get Jej",
  })
  @get()
  static getJej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jej",
  })
  @post("{id}")
  static createJej = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
