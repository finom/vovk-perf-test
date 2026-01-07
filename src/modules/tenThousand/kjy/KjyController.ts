import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjy")
export default class KjyController {
  @operation({
    summary: "Get Kjy",
  })
  @get()
  static getKjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjy",
  })
  @post("{id}")
  static createKjy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
