import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxf")
export default class CxfController {
  @operation({
    summary: "Get Cxf",
  })
  @get()
  static getCxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxf",
  })
  @post("{id}")
  static createCxf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
