import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kca")
export default class KcaController {
  @operation({
    summary: "Get Kca",
  })
  @get()
  static getKca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kca",
  })
  @post("{id}")
  static createKca = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
