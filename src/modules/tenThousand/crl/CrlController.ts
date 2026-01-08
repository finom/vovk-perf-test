import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crl")
export default class CrlController {
  @operation({
    summary: "Get Crl",
  })
  @get()
  static getCrl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crl",
  })
  @post("{id}")
  static createCrl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
