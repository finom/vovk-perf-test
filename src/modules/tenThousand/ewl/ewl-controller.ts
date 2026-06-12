import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewl")
export default class EwlController {
  @operation({
    summary: "Get Ewl",
  })
  @get()
  static getEwl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ewl",
  })
  @post("{id}")
  static createEwl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
