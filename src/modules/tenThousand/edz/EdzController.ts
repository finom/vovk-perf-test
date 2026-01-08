import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edz")
export default class EdzController {
  @operation({
    summary: "Get Edz",
  })
  @get()
  static getEdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edz",
  })
  @post("{id}")
  static createEdz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
