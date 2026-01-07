import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asd")
export default class AsdController {
  @operation({
    summary: "Get Asd",
  })
  @get()
  static getAsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asd",
  })
  @post("{id}")
  static createAsd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
