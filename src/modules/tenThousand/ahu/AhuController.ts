import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahu")
export default class AhuController {
  @operation({
    summary: "Get Ahu",
  })
  @get()
  static getAhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahu",
  })
  @post("{id}")
  static createAhu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
