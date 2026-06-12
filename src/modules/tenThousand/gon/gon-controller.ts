import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gon")
export default class GonController {
  @operation({
    summary: "Get Gon",
  })
  @get()
  static getGon = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gon",
  })
  @post("{id}")
  static createGon = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
