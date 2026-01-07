import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmy")
export default class NmyController {
  @operation({
    summary: "Get Nmy",
  })
  @get()
  static getNmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmy",
  })
  @post("{id}")
  static createNmy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
