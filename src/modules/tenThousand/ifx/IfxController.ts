import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifx")
export default class IfxController {
  @operation({
    summary: "Get Ifx",
  })
  @get()
  static getIfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifx",
  })
  @post("{id}")
  static createIfx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
