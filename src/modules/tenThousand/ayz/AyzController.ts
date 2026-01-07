import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayz")
export default class AyzController {
  @operation({
    summary: "Get Ayz",
  })
  @get()
  static getAyz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayz",
  })
  @post("{id}")
  static createAyz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
