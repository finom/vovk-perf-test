import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iis")
export default class IisController {
  @operation({
    summary: "Get Iis",
  })
  @get()
  static getIis = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iis",
  })
  @post("{id}")
  static createIis = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
