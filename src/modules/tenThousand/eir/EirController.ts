import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eir")
export default class EirController {
  @operation({
    summary: "Get Eir",
  })
  @get()
  static getEir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eir",
  })
  @post("{id}")
  static createEir = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
