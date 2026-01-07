import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahc")
export default class AhcController {
  @operation({
    summary: "Get Ahc",
  })
  @get()
  static getAhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahc",
  })
  @post("{id}")
  static createAhc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
