import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivl")
export default class IvlController {
  @operation({
    summary: "Get Ivl",
  })
  @get()
  static getIvl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ivl",
  })
  @post("{id}")
  static createIvl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
