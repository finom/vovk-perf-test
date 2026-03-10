import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("az")
export default class AzController {
  @operation({
    summary: "Get Az",
  })
  @get()
  static getAz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Az",
  })
  @post("{id}")
  static createAz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
