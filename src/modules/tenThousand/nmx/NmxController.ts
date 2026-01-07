import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmx")
export default class NmxController {
  @operation({
    summary: "Get Nmx",
  })
  @get()
  static getNmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmx",
  })
  @post("{id}")
  static createNmx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
