import { procedure, prefix, get, post, operation } from "vovk";

@prefix("age")
export default class AgeController {
  @operation({
    summary: "Get Age",
  })
  @get()
  static getAge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Age",
  })
  @post("{id}")
  static createAge = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
