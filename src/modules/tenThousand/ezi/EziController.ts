import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezi")
export default class EziController {
  @operation({
    summary: "Get Ezi",
  })
  @get()
  static getEzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezi",
  })
  @post("{id}")
  static createEzi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
