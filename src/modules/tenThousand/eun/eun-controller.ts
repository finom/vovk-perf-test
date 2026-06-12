import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eun")
export default class EunController {
  @operation({
    summary: "Get Eun",
  })
  @get()
  static getEun = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eun",
  })
  @post("{id}")
  static createEun = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
