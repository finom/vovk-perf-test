import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nia")
export default class NiaController {
  @operation({
    summary: "Get Nia",
  })
  @get()
  static getNia = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nia",
  })
  @post("{id}")
  static createNia = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
