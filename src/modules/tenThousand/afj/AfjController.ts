import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afj")
export default class AfjController {
  @operation({
    summary: "Get Afj",
  })
  @get()
  static getAfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afj",
  })
  @post("{id}")
  static createAfj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
