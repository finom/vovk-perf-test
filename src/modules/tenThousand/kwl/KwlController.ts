import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwl")
export default class KwlController {
  @operation({
    summary: "Get Kwl",
  })
  @get()
  static getKwl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kwl",
  })
  @post("{id}")
  static createKwl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
