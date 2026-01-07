import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ec")
export default class EcController {
  @operation({
    summary: "Get Ec",
  })
  @get()
  static getEc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ec",
  })
  @post("{id}")
  static createEc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
