import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezr")
export default class EzrController {
  @operation({
    summary: "Get Ezr",
  })
  @get()
  static getEzr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ezr",
  })
  @post("{id}")
  static createEzr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
