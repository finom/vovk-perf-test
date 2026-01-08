import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxe")
export default class CxeController {
  @operation({
    summary: "Get Cxe",
  })
  @get()
  static getCxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxe",
  })
  @post("{id}")
  static createCxe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
