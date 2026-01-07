import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eym")
export default class EymController {
  @operation({
    summary: "Get Eym",
  })
  @get()
  static getEym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eym",
  })
  @post("{id}")
  static createEym = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
