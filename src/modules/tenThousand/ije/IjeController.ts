import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ije")
export default class IjeController {
  @operation({
    summary: "Get Ije",
  })
  @get()
  static getIje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ije",
  })
  @post("{id}")
  static createIje = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
