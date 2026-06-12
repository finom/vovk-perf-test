import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsi")
export default class FsiController {
  @operation({
    summary: "Get Fsi",
  })
  @get()
  static getFsi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fsi",
  })
  @post("{id}")
  static createFsi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
