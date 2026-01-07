import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fah")
export default class FahController {
  @operation({
    summary: "Get Fah",
  })
  @get()
  static getFah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fah",
  })
  @post("{id}")
  static createFah = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
