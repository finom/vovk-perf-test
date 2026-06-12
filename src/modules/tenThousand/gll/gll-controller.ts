import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gll")
export default class GllController {
  @operation({
    summary: "Get Gll",
  })
  @get()
  static getGll = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gll",
  })
  @post("{id}")
  static createGll = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
