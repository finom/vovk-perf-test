import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsp")
export default class NspController {
  @operation({
    summary: "Get Nsp",
  })
  @get()
  static getNsp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nsp",
  })
  @post("{id}")
  static createNsp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
