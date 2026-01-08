import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exn")
export default class ExnController {
  @operation({
    summary: "Get Exn",
  })
  @get()
  static getExn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exn",
  })
  @post("{id}")
  static createExn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
