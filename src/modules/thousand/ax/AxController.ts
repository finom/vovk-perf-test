import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ax")
export default class AxController {
  @operation({
    summary: "Get Ax",
  })
  @get()
  static getAx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ax",
  })
  @post("{id}")
  static createAx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
