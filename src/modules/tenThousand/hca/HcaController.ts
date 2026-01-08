import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hca")
export default class HcaController {
  @operation({
    summary: "Get Hca",
  })
  @get()
  static getHca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hca",
  })
  @post("{id}")
  static createHca = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
