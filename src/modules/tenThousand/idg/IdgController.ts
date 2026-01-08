import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idg")
export default class IdgController {
  @operation({
    summary: "Get Idg",
  })
  @get()
  static getIdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idg",
  })
  @post("{id}")
  static createIdg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
