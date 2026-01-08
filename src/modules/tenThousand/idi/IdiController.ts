import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idi")
export default class IdiController {
  @operation({
    summary: "Get Idi",
  })
  @get()
  static getIdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idi",
  })
  @post("{id}")
  static createIdi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
