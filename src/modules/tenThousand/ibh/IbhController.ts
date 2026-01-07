import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibh")
export default class IbhController {
  @operation({
    summary: "Get Ibh",
  })
  @get()
  static getIbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibh",
  })
  @post("{id}")
  static createIbh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
