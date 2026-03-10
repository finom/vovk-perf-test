import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grm")
export default class GrmController {
  @operation({
    summary: "Get Grm",
  })
  @get()
  static getGrm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Grm",
  })
  @post("{id}")
  static createGrm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
