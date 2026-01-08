import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifq")
export default class IfqController {
  @operation({
    summary: "Get Ifq",
  })
  @get()
  static getIfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifq",
  })
  @post("{id}")
  static createIfq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
