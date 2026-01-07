import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwn")
export default class KwnController {
  @operation({
    summary: "Get Kwn",
  })
  @get()
  static getKwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwn",
  })
  @post("{id}")
  static createKwn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
