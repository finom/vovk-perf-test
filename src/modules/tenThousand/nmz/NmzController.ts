import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmz")
export default class NmzController {
  @operation({
    summary: "Get Nmz",
  })
  @get()
  static getNmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmz",
  })
  @post("{id}")
  static createNmz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
