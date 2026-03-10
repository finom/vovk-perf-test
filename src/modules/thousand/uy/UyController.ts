import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("uy")
export default class UyController {
  @operation({
    summary: "Get Uy",
  })
  @get()
  static getUy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Uy",
  })
  @post("{id}")
  static createUy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
