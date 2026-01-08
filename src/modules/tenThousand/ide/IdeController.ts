import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ide")
export default class IdeController {
  @operation({
    summary: "Get Ide",
  })
  @get()
  static getIde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ide",
  })
  @post("{id}")
  static createIde = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
