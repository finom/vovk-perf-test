import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nir")
export default class NirController {
  @operation({
    summary: "Get Nir",
  })
  @get()
  static getNir = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nir",
  })
  @post("{id}")
  static createNir = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
