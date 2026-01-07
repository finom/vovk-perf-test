import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cam")
export default class CamController {
  @operation({
    summary: "Get Cam",
  })
  @get()
  static getCam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cam",
  })
  @post("{id}")
  static createCam = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
