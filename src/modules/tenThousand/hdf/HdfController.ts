import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

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
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
