import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mol")
export default class MolController {
  @operation({
    summary: "Get Mol",
  })
  @get()
  static getMol = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mol",
  })
  @post("{id}")
  static createMol = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
