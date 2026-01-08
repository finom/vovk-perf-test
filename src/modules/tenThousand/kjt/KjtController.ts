import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjt")
export default class KjtController {
  @operation({
    summary: "Get Kjt",
  })
  @get()
  static getKjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjt",
  })
  @post("{id}")
  static createKjt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
