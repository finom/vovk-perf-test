import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iin")
export default class IinController {
  @operation({
    summary: "Get Iin",
  })
  @get()
  static getIin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iin",
  })
  @post("{id}")
  static createIin = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
