import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itm")
export default class ItmController {
  @operation({
    summary: "Get Itm",
  })
  @get()
  static getItm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Itm",
  })
  @post("{id}")
  static createItm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
