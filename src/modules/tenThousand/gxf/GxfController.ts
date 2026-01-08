import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxf")
export default class GxfController {
  @operation({
    summary: "Get Gxf",
  })
  @get()
  static getGxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxf",
  })
  @post("{id}")
  static createGxf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
