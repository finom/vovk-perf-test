import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifz")
export default class IfzController {
  @operation({
    summary: "Get Ifz",
  })
  @get()
  static getIfz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ifz",
  })
  @post("{id}")
  static createIfz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
