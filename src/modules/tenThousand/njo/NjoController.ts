import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njo")
export default class NjoController {
  @operation({
    summary: "Get Njo",
  })
  @get()
  static getNjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njo",
  })
  @post("{id}")
  static createNjo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
