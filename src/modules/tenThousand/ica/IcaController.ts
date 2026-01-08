import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ica")
export default class IcaController {
  @operation({
    summary: "Get Ica",
  })
  @get()
  static getIca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ica",
  })
  @post("{id}")
  static createIca = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
