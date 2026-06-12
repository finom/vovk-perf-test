import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixr")
export default class IxrController {
  @operation({
    summary: "Get Ixr",
  })
  @get()
  static getIxr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ixr",
  })
  @post("{id}")
  static createIxr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
