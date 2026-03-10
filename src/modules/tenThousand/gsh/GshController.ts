import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsh")
export default class GshController {
  @operation({
    summary: "Get Gsh",
  })
  @get()
  static getGsh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gsh",
  })
  @post("{id}")
  static createGsh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
