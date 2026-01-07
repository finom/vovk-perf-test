import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ava")
export default class AvaController {
  @operation({
    summary: "Get Ava",
  })
  @get()
  static getAva = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ava",
  })
  @post("{id}")
  static createAva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
