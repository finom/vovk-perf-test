import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idl")
export default class IdlController {
  @operation({
    summary: "Get Idl",
  })
  @get()
  static getIdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idl",
  })
  @post("{id}")
  static createIdl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
