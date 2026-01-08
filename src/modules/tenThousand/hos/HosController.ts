import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hos")
export default class HosController {
  @operation({
    summary: "Get Hos",
  })
  @get()
  static getHos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hos",
  })
  @post("{id}")
  static createHos = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
