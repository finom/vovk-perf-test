import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efh")
export default class EfhController {
  @operation({
    summary: "Get Efh",
  })
  @get()
  static getEfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efh",
  })
  @post("{id}")
  static createEfh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
