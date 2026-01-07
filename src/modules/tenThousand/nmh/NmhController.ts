import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmh")
export default class NmhController {
  @operation({
    summary: "Get Nmh",
  })
  @get()
  static getNmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmh",
  })
  @post("{id}")
  static createNmh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
