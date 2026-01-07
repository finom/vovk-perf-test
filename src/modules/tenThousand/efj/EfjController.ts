import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efj")
export default class EfjController {
  @operation({
    summary: "Get Efj",
  })
  @get()
  static getEfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efj",
  })
  @post("{id}")
  static createEfj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
