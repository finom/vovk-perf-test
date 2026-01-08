import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axa")
export default class AxaController {
  @operation({
    summary: "Get Axa",
  })
  @get()
  static getAxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axa",
  })
  @post("{id}")
  static createAxa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
