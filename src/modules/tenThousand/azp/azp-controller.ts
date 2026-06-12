import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azp")
export default class AzpController {
  @operation({
    summary: "Get Azp",
  })
  @get()
  static getAzp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Azp",
  })
  @post("{id}")
  static createAzp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
