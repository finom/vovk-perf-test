import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adcs")
export default class AdcController {
  @operation({
    summary: "Get Adcs",
  })
  @get()
  static getAdcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adc",
  })
  @post("{id}")
  static createAdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
