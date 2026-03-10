import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azq")
export default class AzqController {
  @operation({
    summary: "Get Azq",
  })
  @get()
  static getAzq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Azq",
  })
  @post("{id}")
  static createAzq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
