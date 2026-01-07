import { procedure, prefix, get, post, operation } from "vovk";

@prefix("add")
export default class AddController {
  @operation({
    summary: "Get Add",
  })
  @get()
  static getAdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Add",
  })
  @post("{id}")
  static createAdd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
