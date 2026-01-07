import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fft")
export default class FftController {
  @operation({
    summary: "Get Fft",
  })
  @get()
  static getFft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fft",
  })
  @post("{id}")
  static createFft = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
