import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avas")
export default class AvaController {
  @operation({
    summary: "Get Avas",
  })
  @get()
  static getAvas = procedure({
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
