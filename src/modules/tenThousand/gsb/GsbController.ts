import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsb")
export default class GsbController {
  @operation({
    summary: "Get Gsb",
  })
  @get()
  static getGsb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gsb",
  })
  @post("{id}")
  static createGsb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
