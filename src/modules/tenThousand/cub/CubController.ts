import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cubs")
export default class CubController {
  @operation({
    summary: "Get Cubs",
  })
  @get()
  static getCubs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cub",
  })
  @post("{id}")
  static createCub = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
