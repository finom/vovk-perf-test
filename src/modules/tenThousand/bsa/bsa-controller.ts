import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsa")
export default class BsaController {
  @operation({
    summary: "Get Bsa",
  })
  @get()
  static getBsa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bsa",
  })
  @post("{id}")
  static createBsa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
