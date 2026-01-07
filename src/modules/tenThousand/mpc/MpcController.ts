import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpc")
export default class MpcController {
  @operation({
    summary: "Get Mpc",
  })
  @get()
  static getMpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpc",
  })
  @post("{id}")
  static createMpc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
