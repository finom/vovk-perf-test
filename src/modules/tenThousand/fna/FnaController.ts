import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fna")
export default class FnaController {
  @operation({
    summary: "Get Fna",
  })
  @get()
  static getFna = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fna",
  })
  @post("{id}")
  static createFna = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
