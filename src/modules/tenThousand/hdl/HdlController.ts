import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdl")
export default class HdlController {
  @operation({
    summary: "Get Hdl",
  })
  @get()
  static getHdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdl",
  })
  @post("{id}")
  static createHdl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
