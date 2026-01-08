import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icd")
export default class IcdController {
  @operation({
    summary: "Get Icd",
  })
  @get()
  static getIcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icd",
  })
  @post("{id}")
  static createIcd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
