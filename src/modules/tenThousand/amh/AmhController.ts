import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amh")
export default class AmhController {
  @operation({
    summary: "Get Amh",
  })
  @get()
  static getAmh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Amh",
  })
  @post("{id}")
  static createAmh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
