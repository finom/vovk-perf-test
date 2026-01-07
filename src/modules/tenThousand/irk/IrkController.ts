import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irk")
export default class IrkController {
  @operation({
    summary: "Get Irk",
  })
  @get()
  static getIrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irk",
  })
  @post("{id}")
  static createIrk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
