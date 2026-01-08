import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iol")
export default class IolController {
  @operation({
    summary: "Get Iol",
  })
  @get()
  static getIol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iol",
  })
  @post("{id}")
  static createIol = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
