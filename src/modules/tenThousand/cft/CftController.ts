import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cft")
export default class CftController {
  @operation({
    summary: "Get Cft",
  })
  @get()
  static getCft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cft",
  })
  @post("{id}")
  static createCft = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
