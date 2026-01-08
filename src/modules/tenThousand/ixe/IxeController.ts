import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixe")
export default class IxeController {
  @operation({
    summary: "Get Ixe",
  })
  @get()
  static getIxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixe",
  })
  @post("{id}")
  static createIxe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
