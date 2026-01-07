import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqe")
export default class AqeController {
  @operation({
    summary: "Get Aqe",
  })
  @get()
  static getAqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqe",
  })
  @post("{id}")
  static createAqe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
