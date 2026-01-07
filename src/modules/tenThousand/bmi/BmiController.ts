import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmi")
export default class BmiController {
  @operation({
    summary: "Get Bmi",
  })
  @get()
  static getBmi = procedure({
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
