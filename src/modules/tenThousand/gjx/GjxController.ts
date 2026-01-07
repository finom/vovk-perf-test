import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjx")
export default class GjxController {
  @operation({
    summary: "Get Gjx",
  })
  @get()
  static getGjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjx",
  })
  @post("{id}")
  static createGjx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
