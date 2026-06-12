import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npp")
export default class NppController {
  @operation({
    summary: "Get Npp",
  })
  @get()
  static getNpp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npp",
  })
  @post("{id}")
  static createNpp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
