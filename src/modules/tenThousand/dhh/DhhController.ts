import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhh")
export default class DhhController {
  @operation({
    summary: "Get Dhh",
  })
  @get()
  static getDhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhh",
  })
  @post("{id}")
  static createDhh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
