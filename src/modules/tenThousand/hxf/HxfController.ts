import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxf")
export default class HxfController {
  @operation({
    summary: "Get Hxf",
  })
  @get()
  static getHxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxf",
  })
  @post("{id}")
  static createHxf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
