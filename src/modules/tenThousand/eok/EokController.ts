import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eok")
export default class EokController {
  @operation({
    summary: "Get Eok",
  })
  @get()
  static getEok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eok",
  })
  @post("{id}")
  static createEok = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
