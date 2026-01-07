import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdf")
export default class HdfController {
  @operation({
    summary: "Get Hdf",
  })
  @get()
  static getHdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdf",
  })
  @post("{id}")
  static createHdf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
