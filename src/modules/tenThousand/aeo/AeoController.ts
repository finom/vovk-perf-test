import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aeo")
export default class AeoController {
  @operation({
    summary: "Get Aeo",
  })
  @get()
  static getAeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aeo",
  })
  @post("{id}")
  static createAeo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
