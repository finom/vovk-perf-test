import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asd")
export default class AsdController {
  @operation({
    summary: "Get Asd",
  })
  @get()
  static getAsd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asd",
  })
  @post("{id}")
  static createAsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
