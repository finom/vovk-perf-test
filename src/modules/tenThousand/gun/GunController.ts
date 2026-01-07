import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gun")
export default class GunController {
  @operation({
    summary: "Get Gun",
  })
  @get()
  static getGun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gun",
  })
  @post("{id}")
  static createGun = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
