import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezw")
export default class EzwController {
  @operation({
    summary: "Get Ezw",
  })
  @get()
  static getEzw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ezw",
  })
  @post("{id}")
  static createEzw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
