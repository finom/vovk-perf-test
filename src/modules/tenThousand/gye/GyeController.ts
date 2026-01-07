import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gye")
export default class GyeController {
  @operation({
    summary: "Get Gye",
  })
  @get()
  static getGye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gye",
  })
  @post("{id}")
  static createGye = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
