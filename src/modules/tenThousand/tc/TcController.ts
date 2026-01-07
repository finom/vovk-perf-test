import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tc")
export default class TcController {
  @operation({
    summary: "Get Tc",
  })
  @get()
  static getTc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tc",
  })
  @post("{id}")
  static createTc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
