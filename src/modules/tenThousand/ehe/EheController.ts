import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehe")
export default class EheController {
  @operation({
    summary: "Get Ehe",
  })
  @get()
  static getEhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehe",
  })
  @post("{id}")
  static createEhe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
