import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cav")
export default class CavController {
  @operation({
    summary: "Get Cav",
  })
  @get()
  static getCav = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cav",
  })
  @post("{id}")
  static createCav = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
