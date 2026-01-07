import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lag")
export default class LagController {
  @operation({
    summary: "Get Lag",
  })
  @get()
  static getLag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lag",
  })
  @post("{id}")
  static createLag = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
