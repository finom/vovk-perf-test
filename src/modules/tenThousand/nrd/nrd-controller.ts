import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrd")
export default class NrdController {
  @operation({
    summary: "Get Nrd",
  })
  @get()
  static getNrd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nrd",
  })
  @post("{id}")
  static createNrd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
