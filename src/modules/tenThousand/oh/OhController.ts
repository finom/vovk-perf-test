import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oh")
export default class OhController {
  @operation({
    summary: "Get Oh",
  })
  @get()
  static getOh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Oh",
  })
  @post("{id}")
  static createOh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
