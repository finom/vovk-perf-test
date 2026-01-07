import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwe")
export default class LweController {
  @operation({
    summary: "Get Lwe",
  })
  @get()
  static getLwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwe",
  })
  @post("{id}")
  static createLwe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
