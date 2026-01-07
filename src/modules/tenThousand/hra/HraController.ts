import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hra")
export default class HraController {
  @operation({
    summary: "Get Hra",
  })
  @get()
  static getHra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hra",
  })
  @post("{id}")
  static createHra = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
