import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nip")
export default class NipController {
  @operation({
    summary: "Get Nip",
  })
  @get()
  static getNip = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nip",
  })
  @post("{id}")
  static createNip = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
