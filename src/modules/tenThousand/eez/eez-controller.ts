import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eez")
export default class EezController {
  @operation({
    summary: "Get Eez",
  })
  @get()
  static getEez = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eez",
  })
  @post("{id}")
  static createEez = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
