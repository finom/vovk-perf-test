import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iio")
export default class IioController {
  @operation({
    summary: "Get Iio",
  })
  @get()
  static getIio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iio",
  })
  @post("{id}")
  static createIio = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
