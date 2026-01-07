import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmi")
export default class BmiController {
  @operation({
    summary: "Get Bmi",
  })
  @get()
  static getBmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmi",
  })
  @post("{id}")
  static createBmi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
