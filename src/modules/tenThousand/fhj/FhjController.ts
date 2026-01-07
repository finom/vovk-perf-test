import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhj")
export default class FhjController {
  @operation({
    summary: "Get Fhj",
  })
  @get()
  static getFhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhj",
  })
  @post("{id}")
  static createFhj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
