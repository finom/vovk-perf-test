import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cif")
export default class CifController {
  @operation({
    summary: "Get Cif",
  })
  @get()
  static getCif = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cif",
  })
  @post("{id}")
  static createCif = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
