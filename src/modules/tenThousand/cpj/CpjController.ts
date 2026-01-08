import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpj")
export default class CpjController {
  @operation({
    summary: "Get Cpj",
  })
  @get()
  static getCpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpj",
  })
  @post("{id}")
  static createCpj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
