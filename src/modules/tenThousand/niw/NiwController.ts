import { procedure, prefix, get, post, operation } from "vovk";

@prefix("niw")
export default class NiwController {
  @operation({
    summary: "Get Niw",
  })
  @get()
  static getNiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Niw",
  })
  @post("{id}")
  static createNiw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
