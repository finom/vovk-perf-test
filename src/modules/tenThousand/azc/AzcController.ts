import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azc")
export default class AzcController {
  @operation({
    summary: "Get Azc",
  })
  @get()
  static getAzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azc",
  })
  @post("{id}")
  static createAzc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
