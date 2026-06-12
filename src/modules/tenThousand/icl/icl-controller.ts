import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icl")
export default class IclController {
  @operation({
    summary: "Get Icl",
  })
  @get()
  static getIcl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Icl",
  })
  @post("{id}")
  static createIcl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
