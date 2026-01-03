import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asds")
export default class AsdController {
  @operation({
    summary: "Get Asds",
  })
  @get()
  static getAsds = procedure({
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
