import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktk")
export default class KtkController {
  @operation({
    summary: "Get Ktk",
  })
  @get()
  static getKtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktk",
  })
  @post("{id}")
  static createKtk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
