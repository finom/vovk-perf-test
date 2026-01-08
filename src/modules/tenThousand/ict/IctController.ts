import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ict")
export default class IctController {
  @operation({
    summary: "Get Ict",
  })
  @get()
  static getIct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ict",
  })
  @post("{id}")
  static createIct = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
