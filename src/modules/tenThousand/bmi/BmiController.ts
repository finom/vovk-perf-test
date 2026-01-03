import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmis")
export default class BmiController {
  @operation({
    summary: "Get Bmis",
  })
  @get()
  static getBmis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmi",
  })
  @post("{id}")
  static createBmi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
