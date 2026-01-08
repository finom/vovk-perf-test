import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iya")
export default class IyaController {
  @operation({
    summary: "Get Iya",
  })
  @get()
  static getIya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iya",
  })
  @post("{id}")
  static createIya = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
