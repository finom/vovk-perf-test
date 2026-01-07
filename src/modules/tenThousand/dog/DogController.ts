import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dog")
export default class DogController {
  @operation({
    summary: "Get Dog",
  })
  @get()
  static getDog = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dog",
  })
  @post("{id}")
  static createDog = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
