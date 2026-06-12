import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hes")
export default class HesController {
  @operation({
    summary: "Get Hes",
  })
  @get()
  static getHes = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hes",
  })
  @post("{id}")
  static createHes = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
