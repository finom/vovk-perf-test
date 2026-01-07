import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ant")
export default class AntController {
  @operation({
    summary: "Get Ant",
  })
  @get()
  static getAnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ant",
  })
  @post("{id}")
  static createAnt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
