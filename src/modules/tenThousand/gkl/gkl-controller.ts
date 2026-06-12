import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkl")
export default class GklController {
  @operation({
    summary: "Get Gkl",
  })
  @get()
  static getGkl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gkl",
  })
  @post("{id}")
  static createGkl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
