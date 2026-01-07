import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clh")
export default class ClhController {
  @operation({
    summary: "Get Clh",
  })
  @get()
  static getClh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clh",
  })
  @post("{id}")
  static createClh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
