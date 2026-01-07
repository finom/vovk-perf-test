import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elb")
export default class ElbController {
  @operation({
    summary: "Get Elb",
  })
  @get()
  static getElb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elb",
  })
  @post("{id}")
  static createElb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
