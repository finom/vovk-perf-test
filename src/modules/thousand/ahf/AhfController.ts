import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahf")
export default class AhfController {
  @operation({
    summary: "Get Ahf",
  })
  @get()
  static getAhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahf",
  })
  @post("{id}")
  static createAhf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
