import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezo")
export default class EzoController {
  @operation({
    summary: "Get Ezo",
  })
  @get()
  static getEzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezo",
  })
  @post("{id}")
  static createEzo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
