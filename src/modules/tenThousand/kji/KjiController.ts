import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kji")
export default class KjiController {
  @operation({
    summary: "Get Kji",
  })
  @get()
  static getKji = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kji",
  })
  @post("{id}")
  static createKji = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
