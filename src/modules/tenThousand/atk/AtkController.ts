import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atk")
export default class AtkController {
  @operation({
    summary: "Get Atk",
  })
  @get()
  static getAtk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atk",
  })
  @post("{id}")
  static createAtk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
