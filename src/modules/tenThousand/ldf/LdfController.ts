import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldf")
export default class LdfController {
  @operation({
    summary: "Get Ldf",
  })
  @get()
  static getLdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldf",
  })
  @post("{id}")
  static createLdf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
