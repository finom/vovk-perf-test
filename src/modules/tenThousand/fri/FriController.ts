import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fris")
export default class FriController {
  @operation({
    summary: "Get Fris",
  })
  @get()
  static getFris = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fri",
  })
  @post("{id}")
  static createFri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
