import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvu")
export default class GvuController {
  @operation({
    summary: "Get Gvu",
  })
  @get()
  static getGvu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gvu",
  })
  @post("{id}")
  static createGvu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
