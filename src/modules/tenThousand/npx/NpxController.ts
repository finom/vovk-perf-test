import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npx")
export default class NpxController {
  @operation({
    summary: "Get Npx",
  })
  @get()
  static getNpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npx",
  })
  @post("{id}")
  static createNpx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
