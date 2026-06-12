import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isa")
export default class IsaController {
  @operation({
    summary: "Get Isa",
  })
  @get()
  static getIsa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Isa",
  })
  @post("{id}")
  static createIsa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
