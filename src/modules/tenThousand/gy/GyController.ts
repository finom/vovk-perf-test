import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gy")
export default class GyController {
  @operation({
    summary: "Get Gy",
  })
  @get()
  static getGy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gy",
  })
  @post("{id}")
  static createGy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
