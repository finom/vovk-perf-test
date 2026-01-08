import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpj")
export default class FpjController {
  @operation({
    summary: "Get Fpj",
  })
  @get()
  static getFpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpj",
  })
  @post("{id}")
  static createFpj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
