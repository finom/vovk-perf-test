import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aif")
export default class AifController {
  @operation({
    summary: "Get Aif",
  })
  @get()
  static getAif = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aif",
  })
  @post("{id}")
  static createAif = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
