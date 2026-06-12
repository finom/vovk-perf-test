import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdo")
export default class FdoController {
  @operation({
    summary: "Get Fdo",
  })
  @get()
  static getFdo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fdo",
  })
  @post("{id}")
  static createFdo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
