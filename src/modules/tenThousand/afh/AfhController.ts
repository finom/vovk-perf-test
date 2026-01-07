import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afh")
export default class AfhController {
  @operation({
    summary: "Get Afh",
  })
  @get()
  static getAfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afh",
  })
  @post("{id}")
  static createAfh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
