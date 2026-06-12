import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcc")
export default class GccController {
  @operation({
    summary: "Get Gcc",
  })
  @get()
  static getGcc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gcc",
  })
  @post("{id}")
  static createGcc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
