import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqb")
export default class DqbController {
  @operation({
    summary: "Get Dqb",
  })
  @get()
  static getDqb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqb",
  })
  @post("{id}")
  static createDqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
