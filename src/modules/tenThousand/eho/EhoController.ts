import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eho")
export default class EhoController {
  @operation({
    summary: "Get Eho",
  })
  @get()
  static getEho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eho",
  })
  @post("{id}")
  static createEho = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
