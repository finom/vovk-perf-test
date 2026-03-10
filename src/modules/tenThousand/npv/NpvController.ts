import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npv")
export default class NpvController {
  @operation({
    summary: "Get Npv",
  })
  @get()
  static getNpv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npv",
  })
  @post("{id}")
  static createNpv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
