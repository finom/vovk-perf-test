import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oh")
export default class OhController {
  @operation({
    summary: "Get Oh",
  })
  @get()
  static getOh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Oh",
  })
  @post("{id}")
  static createOh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
