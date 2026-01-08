import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esx")
export default class EsxController {
  @operation({
    summary: "Get Esx",
  })
  @get()
  static getEsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esx",
  })
  @post("{id}")
  static createEsx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
