import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crs")
export default class CrsController {
  @operation({
    summary: "Get Crs",
  })
  @get()
  static getCrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crs",
  })
  @post("{id}")
  static createCrs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
