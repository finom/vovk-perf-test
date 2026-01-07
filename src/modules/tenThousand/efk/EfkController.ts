import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efk")
export default class EfkController {
  @operation({
    summary: "Get Efk",
  })
  @get()
  static getEfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efk",
  })
  @post("{id}")
  static createEfk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
