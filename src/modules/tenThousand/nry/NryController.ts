import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nry")
export default class NryController {
  @operation({
    summary: "Get Nry",
  })
  @get()
  static getNry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nry",
  })
  @post("{id}")
  static createNry = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
