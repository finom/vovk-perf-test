import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndl")
export default class NdlController {
  @operation({
    summary: "Get Ndl",
  })
  @get()
  static getNdl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ndl",
  })
  @post("{id}")
  static createNdl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
