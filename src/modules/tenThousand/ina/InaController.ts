import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ina")
export default class InaController {
  @operation({
    summary: "Get Ina",
  })
  @get()
  static getIna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ina",
  })
  @post("{id}")
  static createIna = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
