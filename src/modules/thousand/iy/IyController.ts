import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iy")
export default class IyController {
  @operation({
    summary: "Get Iy",
  })
  @get()
  static getIy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iy",
  })
  @post("{id}")
  static createIy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
