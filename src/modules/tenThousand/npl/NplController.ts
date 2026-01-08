import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npl")
export default class NplController {
  @operation({
    summary: "Get Npl",
  })
  @get()
  static getNpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npl",
  })
  @post("{id}")
  static createNpl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
