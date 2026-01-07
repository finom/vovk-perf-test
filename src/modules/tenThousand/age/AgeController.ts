import { procedure, prefix, get, post, operation } from "vovk";

@prefix("age")
export default class AgeController {
  @operation({
    summary: "Get Age",
  })
  @get()
  static getAge = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Age",
  })
  @post("{id}")
  static createAge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
