import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nal")
export default class NalController {
  @operation({
    summary: "Get Nal",
  })
  @get()
  static getNal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nal",
  })
  @post("{id}")
  static createNal = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
