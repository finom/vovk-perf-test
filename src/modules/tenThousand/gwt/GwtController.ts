import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwt")
export default class GwtController {
  @operation({
    summary: "Get Gwt",
  })
  @get()
  static getGwt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gwt",
  })
  @post("{id}")
  static createGwt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
