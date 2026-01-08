import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inz")
export default class InzController {
  @operation({
    summary: "Get Inz",
  })
  @get()
  static getInz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inz",
  })
  @post("{id}")
  static createInz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
