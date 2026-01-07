import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dog")
export default class DogController {
  @operation({
    summary: "Get Dog",
  })
  @get()
  static getDog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dog",
  })
  @post("{id}")
  static createDog = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
