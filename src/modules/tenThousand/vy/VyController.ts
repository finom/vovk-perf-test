import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vy")
export default class VyController {
  @operation({
    summary: "Get Vy",
  })
  @get()
  static getVy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vy",
  })
  @post("{id}")
  static createVy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
