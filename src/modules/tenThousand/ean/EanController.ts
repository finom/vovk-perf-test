import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ean")
export default class EanController {
  @operation({
    summary: "Get Ean",
  })
  @get()
  static getEan = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ean",
  })
  @post("{id}")
  static createEan = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
