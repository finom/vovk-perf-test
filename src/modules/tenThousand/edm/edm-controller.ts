import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edm")
export default class EdmController {
  @operation({
    summary: "Get Edm",
  })
  @get()
  static getEdm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Edm",
  })
  @post("{id}")
  static createEdm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
