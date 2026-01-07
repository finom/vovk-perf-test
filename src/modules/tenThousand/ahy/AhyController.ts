import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahy")
export default class AhyController {
  @operation({
    summary: "Get Ahy",
  })
  @get()
  static getAhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahy",
  })
  @post("{id}")
  static createAhy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
