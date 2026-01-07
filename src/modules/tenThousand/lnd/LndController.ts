import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnd")
export default class LndController {
  @operation({
    summary: "Get Lnd",
  })
  @get()
  static getLnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnd",
  })
  @post("{id}")
  static createLnd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
