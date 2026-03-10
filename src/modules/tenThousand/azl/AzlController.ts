import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azl")
export default class AzlController {
  @operation({
    summary: "Get Azl",
  })
  @get()
  static getAzl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Azl",
  })
  @post("{id}")
  static createAzl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
