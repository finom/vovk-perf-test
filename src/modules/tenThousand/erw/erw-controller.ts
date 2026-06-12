import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("erw")
export default class ErwController {
  @operation({
    summary: "Get Erw",
  })
  @get()
  static getErw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Erw",
  })
  @post("{id}")
  static createErw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
