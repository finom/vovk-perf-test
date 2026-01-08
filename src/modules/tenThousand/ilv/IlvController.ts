import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilv")
export default class IlvController {
  @operation({
    summary: "Get Ilv",
  })
  @get()
  static getIlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilv",
  })
  @post("{id}")
  static createIlv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
