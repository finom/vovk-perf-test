import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdm")
export default class HdmController {
  @operation({
    summary: "Get Hdm",
  })
  @get()
  static getHdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdm",
  })
  @post("{id}")
  static createHdm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
