import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjy")
export default class GjyController {
  @operation({
    summary: "Get Gjy",
  })
  @get()
  static getGjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjy",
  })
  @post("{id}")
  static createGjy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
