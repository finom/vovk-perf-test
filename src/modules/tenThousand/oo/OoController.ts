import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("oo")
export default class OoController {
  @operation({
    summary: "Get Oo",
  })
  @get()
  static getOo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Oo",
  })
  @post("{id}")
  static createOo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
