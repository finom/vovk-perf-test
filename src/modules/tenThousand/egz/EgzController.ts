import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egz")
export default class EgzController {
  @operation({
    summary: "Get Egz",
  })
  @get()
  static getEgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egz",
  })
  @post("{id}")
  static createEgz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
