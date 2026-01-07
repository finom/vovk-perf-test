import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nah")
export default class NahController {
  @operation({
    summary: "Get Nah",
  })
  @get()
  static getNah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nah",
  })
  @post("{id}")
  static createNah = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
