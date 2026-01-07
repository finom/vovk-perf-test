import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjw")
export default class GjwController {
  @operation({
    summary: "Get Gjw",
  })
  @get()
  static getGjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjw",
  })
  @post("{id}")
  static createGjw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
