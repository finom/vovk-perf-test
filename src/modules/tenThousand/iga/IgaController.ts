import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iga")
export default class IgaController {
  @operation({
    summary: "Get Iga",
  })
  @get()
  static getIga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iga",
  })
  @post("{id}")
  static createIga = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
