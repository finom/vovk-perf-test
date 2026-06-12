import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egy")
export default class EgyController {
  @operation({
    summary: "Get Egy",
  })
  @get()
  static getEgy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Egy",
  })
  @post("{id}")
  static createEgy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
