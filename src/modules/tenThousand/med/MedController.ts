import { procedure, prefix, get, post, operation } from "vovk";

@prefix("med")
export default class MedController {
  @operation({
    summary: "Get Med",
  })
  @get()
  static getMed = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Med",
  })
  @post("{id}")
  static createMed = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
